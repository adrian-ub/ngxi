import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFlashlightIcon],svg[icon-park-flashlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M17 22.1961C17 22.0726 16.9419 21.9564 16.8431 21.8824C11.9058 18.1793 9 12.3678 9 6.19608L9 4H39V6.19608C39 12.3678 36.0942 18.1793 31.1569 21.8824C31.0581 21.9564 31 22.0726 31 22.1961V44H17V22.1961Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M38 11H10"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 28.0083V32.0083"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M17 22V22C11.9639 18.2229 9 12.2951 9 6L9 4"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M39 4V6C39 12.2951 36.0361 18.2229 31 22V22"></svg:path></svg:g>`,
})
export class IconParkFlashlightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
