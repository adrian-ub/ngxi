import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidInboxIcon],svg[fa6-solid-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M121 32c-29.4 0-55 20-62.1 48.5l-57 227.9C.6 313.5 0 318.7 0 323.9V416c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64v-92.1c0-5.2-.6-10.4-1.9-15.5l-57-227.9C446 52 420.4 32 391 32zm0 64h270l48 192h-51.2c-12.1 0-23.2 6.8-28.6 17.7l-14.3 28.6c-5.4 10.8-16.5 17.7-28.6 17.7H195.9c-12.1 0-23.2-6.8-28.6-17.7L153 305.7c-5.4-10.8-16.5-17.7-28.6-17.7H73z"></svg:path>`,
})
export class Fa6SolidInboxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
