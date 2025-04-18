import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixInfoFeedIcon],svg[ix-info-feed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M192.021 128.021h256.022V85.354H192.02zM64.043 170.688h85.333V85.333H64.043zm127.978 42.666h256.022v-42.666H192.02zm170.667 170.667h85.355v-85.355h-85.355zM64 341.354h256v-42.688H64zm.043 85.334h256V384.02h-256z"></svg:path>`,
})
export class IxInfoFeedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
