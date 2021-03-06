/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import _ from 'lodash';
import React from 'react';
import classNames from 'classnames';

import JumpAnchor from 'app_modules/site/components/page/jump-anchor';

class Heading extends React.Component {
  render() {
    const props = _.omit(this.props, ['className', 'id', 'type', 'textLabel']);
    const className = classNames(this.props.className, 'site-jump-anchor__container');
    switch (this.props.type) {
    case 'h1':
      return <h1 className={className} {...props}>
        <JumpAnchor id={this.props.id} level="1" scrollSpyActive>{this.props.textLabel}</JumpAnchor>
        {this.props.children}
      </h1>;
      break;
    case 'h2':
      return <h2 className={className} {...props}>
        <JumpAnchor id={this.props.id} level="2" scrollSpyActive>{this.props.textLabel}</JumpAnchor>
        {this.props.children}
      </h2>;
      break;
    case 'h3':
      return <h3 className={className} {...props}>
        <JumpAnchor id={this.props.id} level="3" scrollSpyActive>{this.props.textLabel}</JumpAnchor>
        {this.props.children}
      </h3>;
      break;
    default:
      return React.createElement(this.props.type, this.props, this.props.children);
    }
  }
}

Heading.propTypes = {
  classNames: React.PropTypes.string,
  textLabel: React.PropTypes.string,
  type: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired
};

export default Heading;
