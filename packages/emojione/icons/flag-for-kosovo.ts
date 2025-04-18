import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForKosovoIcon],svg[emojione-flag-for-kosovo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#428bc1"></svg:circle><svg:path fill="#dbb471" d="M29 26.8s-1 1.5-2.7 2.2c0 0 .1 2.5-1.5 2.7c-1.5.2-2.9 0-2.9 0s.2 2.3-.8 1.7c-1.1-.6-4.1-.5-2.9 1.3s3.1 2.6 3.6 6.8c0 0 5.2 1.8 5.6 5.5c.4 3.6-.1 4.3-.1 4.3s3.2.2 3.2-2.4c0-2.5 1.9-2.4 2.8-2.5S35 44 36.2 45s2.2 1.2 3.1-.2c.9-1.5 3.6-1.7 3.6-1.7s.1-4.3 3.1-6.9c0 0-1.5-2.6-4.9-2.6c0 0-.2-3.2-2.9-3.2c0 0-1.9-3.5-5-3.5c0 0-1.1-1.4-1.1-3.6c0 0-2 .3-2.8 1s-1.5.6-1.5.6s.7.6 1.2 1.9"></svg:path><svg:path fill="#fff" d="m28 17.5l1.9 1.4l-.7-2.3l1.8-1.4h-2.3l-.7-2.3l-.7 2.3H25l1.8 1.4l-.7 2.3zm-7 2l1.9 1.4l-.7-2.3l1.8-1.4h-2.3l-.7-2.3l-.7 2.3H18l1.8 1.4l-.7 2.3zm15-2l1.9 1.4l-.7-2.3l1.8-1.4h-2.3l-.7-2.3l-.7 2.3H33l1.8 1.4l-.7 2.3zm-22 6l1.9 1.4l-.7-2.3l1.8-1.4h-2.3l-.7-2.3l-.7 2.3H11l1.8 1.4l-.7 2.3zm36-1l1.9 1.4l-.7-2.3l1.8-1.4h-2.3l-.7-2.3l-.7 2.3H47l1.8 1.4l-.7 2.3zm-7-3l1.9 1.4l-.7-2.3l1.8-1.4h-2.3l-.7-2.3l-.7 2.3H40l1.8 1.4l-.7 2.3z"></svg:path>`,
})
export class EmojioneFlagForKosovoIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
