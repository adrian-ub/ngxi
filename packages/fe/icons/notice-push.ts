import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feNoticePushIcon],svg[fe-notice-push-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="feNoticePush0" fill="currentColor" d="M17 11a4 4 0 1 1 0-8a4 4 0 0 1 0 8M5 5h6v2H5v12h12v-6h2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2"></svg:path></svg:defs><svg:use href="#feNoticePush0"></svg:use>`,
})
export class FeNoticePushIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
