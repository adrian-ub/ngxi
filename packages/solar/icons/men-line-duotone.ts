import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMenLineDuotoneIcon],svg[solar-men-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="10" cy="14" r="8" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path fill="currentColor" d="M22 2h.75a.75.75 0 0 0-.75-.75zm-.75 5a.75.75 0 0 0 1.5 0zM17 1.25a.75.75 0 0 0 0 1.5zm-.97 7.78l6.5-6.5l-1.06-1.06l-6.5 6.5zM21.25 2v5h1.5V2zM17 2.75h5v-1.5h-5z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMenLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
