import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsTkIcon],svg[circle-flags-tk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="circleFlagsTk0" fill="#eee" d="m188 133.6l5.6 17h17.9L197 161l5.5 17l-14.4-10.5l-14.5 10.5l5.5-17l-14.4-10.5h17.8zM115.5 256l7 21.3h22.3l-18 13l6.8 21.4l-18-13.2l-18.1 13.2l6.9-21.3l-18.1-13.1h22.3zm0-178l7 21.2h22.3l-18 13.1l6.8 21.3l-18-13.2l-18.1 13.2l6.9-21.3l-18.1-13.1h22.3zM59.8 178l6.9 21.3H89l-18 13.2l6.9 21.2l-18.1-13.1l-18.1 13.1l7-21.2l-18.2-13.2H53z"></svg:path></svg:defs><svg:mask id="circleFlagsTk1"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsTk1)"><svg:path fill="#0052b4" d="M0 0h512v512H0z"></svg:path><svg:use href="#circleFlagsTk0"></svg:use><svg:use href="#circleFlagsTk0"></svg:use><svg:path fill="#ffda44" d="M411.8 122.4L144.7 345h361.7v-35.8a167.4 167.4 0 0 1-97.9-152.3c0-11.7 1-23.5 3.3-34.5m94.6 244.9H144.7v33.4h361.7z"></svg:path></svg:g>`,
})
export class CircleFlagsTkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
