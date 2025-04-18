import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1FlagForPakistanIcon],svg[emojione-v1-flag-for-pakistan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e6e7e8" d="M10 10C3.373 10 0 14.925 0 21v22c0 6.075 3.373 11 10 11h10V10z"></svg:path><svg:path fill="#006838" d="M54 10H20v44h34c6.627 0 10-4.925 10-11V21c0-6.075-3.373-11-10-11"></svg:path><svg:g fill="#e6e7e8"><svg:path d="m44.509 21.528l2.264 2.101l3.01-.671l-1.298 2.806l1.57 2.66l-3.073-.374l-2.044 2.319l-.593-3.03l-2.84-1.231l2.7-1.506z"></svg:path><svg:path d="M52.37 35.33c-4.301 4.302-11.272 4.302-15.574 0s-4.302-11.273 0-15.574c.297-.296.607-.567.927-.822a12.64 12.64 0 0 0-5.829 3.312c-4.966 4.967-4.966 13.02 0 17.987c4.969 4.966 13.02 4.966 17.987 0a12.64 12.64 0 0 0 3.312-5.829a12 12 0 0 1-.823.926"></svg:path></svg:g>`,
})
export class EmojioneV1FlagForPakistanIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
