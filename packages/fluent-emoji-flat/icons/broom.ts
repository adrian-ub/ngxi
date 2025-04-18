import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatBroomIcon],svg[fluent-emoji-flat-broom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FFB02E" d="M15 20.18s.665-.204 1.388-.082l2.432 1.441c.56.653.56 1.476.56 1.476c.07 1.382-.524 3.016-.746 3.78c-.613 1.896-2.053 2.712-3.634 2.753l-7.998.053c-.466.023-1.499-.549-.426-1.61c1.161-1.12 5.075-4.544 6.33-6.19c0 0 .67-1.125 2.094-1.621"></svg:path><svg:path fill="#7D4533" d="M28.186 2.308c.658.38.884 1.22.506 1.878l-9.5 16.5l-2.384-1.372l9.5-16.5a1.375 1.375 0 0 1 1.878-.506"></svg:path><svg:path fill="#9B9B9B" d="M19.379 20.344L17 19s-.527-.113-.781.29c-.395.675.074.905.074.905l2.398 1.39c.329.184 1.293-.257.688-1.241"></svg:path><svg:path fill="#F8312F" d="M13.298 21.18a.375.375 0 1 0-.357.66l6.1 3.293a.375.375 0 0 0 .357-.66zm-1.001 1.259a.375.375 0 1 0-.354.661l6.663 3.565a.375.375 0 1 0 .354-.66z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatBroomIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
