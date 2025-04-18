import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPetrolIcon],svg[icon-park-petrol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M42 42V6H39L30 16H12L6 22V42H42Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M12 16L22 6H40"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-linecap="round" d="M20.643 28.8886C22.0743 27.0081 23.1776 24.4103 23.774 23C24.8177 24.4103 27.084 27.9484 27.7997 29.8288C28.6942 32.1793 26.4578 35 23.774 35C21.0903 35 18.8538 31.2391 20.643 28.8886Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M11 8L4 15"></svg:path></svg:g>`,
})
export class IconParkPetrolIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
