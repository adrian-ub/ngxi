import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRegisteredIcon],svg[openmoji-registered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="26.68" fill="#fff" fill-rule="evenodd"></svg:circle><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke-miterlimit="10" stroke-width="7.752" d="M27.45 49.57V22.44H37.8a6.757 6.757 0 1 1 0 13.516H27.45" clip-rule="evenodd"></svg:path><svg:circle cx="36" cy="36" r="26.68" stroke-width="4.74"></svg:circle><svg:path stroke-miterlimit="10" stroke-width="7.752" d="m38.03 35.95l5.884 13.62" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class OpenmojiRegisteredIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
