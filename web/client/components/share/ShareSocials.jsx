/*
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {getMessageById} from '../../utils/LocaleUtils';
import PropTypes from 'prop-types';
import Message from '../../components/I18N/Message';

import {
    ShareButtons,
    ShareCounts,
    generateShareIcon
} from 'react-share';

// components of the socialnetworks grouped in a bigger container aka ShareSocials
const {
    // FacebookShareButton,
    // LinkedinShareButton,
    // TwitterShareButton,
    VKShareButton,
    OKShareButton,
    TelegramShareButton
} = ShareButtons;

// counter for counting the number of map-sharing on a given social network
const {
    // FacebookShareCount,
    // LinkedinShareCount,
    VKShareCount,
    OKShareCount
} = ShareCounts;

// icons of the social network
// const FacebookIcon = generateShareIcon('facebook');
// const TwitterIcon = generateShareIcon('twitter');
// const LinkedinIcon = generateShareIcon('linkedin');
const VKIcon = generateShareIcon('vk');
const OKIcon = generateShareIcon('ok');
const TelegramIcon = generateShareIcon('telegram');

class ShareSocials extends React.Component {
    static propTypes = {
        shareUrl: PropTypes.string,
        getCount: PropTypes.func,
        sharedTitle: PropTypes.string
    };

    static contextTypes = {
        messages: PropTypes.object
    };

    static defaultProps = {
        sharedTitle: ""
    };

    render() {
        let countProps = {};
        if (this.props.getCount) {
            countProps.getCount = this.props.getCount;
        }
        const title = this.props.sharedTitle || getMessageById(this.context.messages, "share.sharedTitle");

        return (
            <div className="social-links">
                <h4>
                    <Message msgId="share.socialIntro" />
                </h4>
                <div className="social-links-list">
                    {/* <div className="social-box facebook">
                        <FacebookShareButton
                            url={this.props.shareUrl}
                            quote={title}
                            className="share-facebook">
                            <FacebookIcon
                                size={32}
                                round />
                        </FacebookShareButton>
                        <FacebookShareCount
                            url={this.props.shareUrl}
                            {...countProps}
                            className="share-facebook-count">
                            {count => count}
                        </FacebookShareCount>
                    </div> */}
                    <div className="social-box vk">
                        <VKShareButton
                            url={this.props.shareUrl}
                            title={title}
                            className="share-vk">
                            <VKIcon
                                size={32}
                                round />
                        </VKShareButton>
                        <VKShareCount
                            url={this.props.shareUrl}
                            {...countProps}
                            className="share-vk-count">
                            {count => count}
                        </VKShareCount>
                        {/* <div className="share-vk-count">&nbsp;</div> */}
                    </div>
                    <div className="social-box ok">
                        <OKShareButton
                            url={this.props.shareUrl}
                            title={title}
                            className="share-ok">
                            <OKIcon
                                size={32}
                                round />
                        </OKShareButton>
                        <OKShareCount
                            url={this.props.shareUrl}
                            {...countProps}
                            className="share-ok-count">
                            {count => count}
                        </OKShareCount>
                        {/* <div className="share-ok-count">&nbsp;</div> */}
                    </div>
                    <div className="social-box telegram">
                        <TelegramShareButton
                            url={this.props.shareUrl}
                            title={title}
                            className="share-telegram">
                            <TelegramIcon
                                size={32}
                                round />
                        </TelegramShareButton>
                        <div className="share-telegram-count">&nbsp;</div>
                    </div>
                    {/* <div className="social-box twitter">
                        <TwitterShareButton
                            url={this.props.shareUrl}
                            title={title}
                            className="share-twitter">
                            <TwitterIcon
                                size={32}
                                round />
                        </TwitterShareButton>
                        <div className="share-twitter-count">&nbsp;</div>
                    </div> */}
                    {/* <div className="social-box linkedin">
                        <LinkedinShareButton
                            url={this.props.shareUrl}
                            title={title}
                            className="share-linkedin-count">
                            <LinkedinIcon
                                size={32}
                                round />
                        </LinkedinShareButton>
                        <LinkedinShareCount
                            url={this.props.shareUrl}
                            {...countProps}
                            className="share-linkedin-count">
                            {count => count}
                        </LinkedinShareCount>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default ShareSocials;
