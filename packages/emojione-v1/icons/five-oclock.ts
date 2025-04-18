import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1FiveOclockIcon],svg[emojione-v1-five-oclock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="31.868" cy="31.868" r="29.521" fill="#e0e7ec"></svg:circle><svg:path fill="#98a9b4" d="M0 31.868c0 17.571 14.295 31.868 31.866 31.868s31.868-14.297 31.868-31.868S49.438 0 31.866 0S0 14.297 0 31.868m6.204 0c0-14.149 11.513-25.662 25.662-25.662c14.151 0 25.663 11.513 25.663 25.662c0 14.151-11.512 25.664-25.663 25.664c-14.149 0-25.662-11.512-25.662-25.664"></svg:path><svg:path fill="#85939c" d="M33.74 10.996c0-1.434-.846-2.595-1.883-2.595c-1.039 0-1.883 1.162-1.883 2.595v20.995c0 1.434.844 2.593 1.883 2.593s1.883-1.159 1.883-2.593z"></svg:path><svg:path fill="#788288" d="M37.07 47.664c.637 1.284 1.907 1.949 2.839 1.488s1.171-1.875.536-3.157l-6.744-13.619c-.636-1.282-1.908-1.947-2.839-1.486c-.929.461-1.171 1.875-.536 3.158z"></svg:path>`,
})
export class EmojioneV1FiveOclockIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
