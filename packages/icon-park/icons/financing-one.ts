import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFinancingOneIcon],svg[icon-park-financing-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M15.0002 14.3848C19.1256 16.0002 24.0085 16.0002 24.0085 16.0002C24.0085 16.0002 28.8802 16.0002 33.0002 14.3848C37.502 19.6386 40.6566 26.5646 42.7299 32.3977C44.8289 38.3029 40.2008 44.0002 33.9336 44.0002H14.0199C7.76837 44.0002 3.14607 38.329 5.23448 32.4366C7.29812 26.614 10.455 19.6856 15.0002 14.3848Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 28H30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 34H30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24.0088 28V38"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M30 22L24 28L18 22"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 16C31.1797 16 37 13.3137 37 10C37 6.68629 31.1797 4 24 4C16.8203 4 11 6.68629 11 10C11 13.3137 16.8203 16 24 16Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkFinancingOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
