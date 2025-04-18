import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiFatCornerUpLeftSolidIcon],svg[mynaui-fat-corner-up-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.003 4a.75.75 0 0 0-1.299-.511l-7.253 7.786a.75.75 0 0 0-.013 1.008l7.253 8.213A.75.75 0 0 0 11.003 20v-4.382c1.255-.138 2.576-.057 3.969.252c1.434.319 3.25 1.722 5.438 4.515a.75.75 0 0 0 1.337-.535c-.322-3.311-1.537-6.113-3.662-8.365c-1.963-2.08-4.334-3.228-7.082-3.421z"></svg:path>`,
})
export class MynauiFatCornerUpLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
