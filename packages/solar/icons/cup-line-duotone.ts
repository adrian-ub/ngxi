import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarCupLineDuotoneIcon],svg[solar-cup-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 7c0-1.886 0-2.828.586-3.414S5.114 3 7 3h6c1.886 0 2.828 0 3.414.586S17 5.114 17 7v5c0 2.828 0 4.243-.879 5.121C15.243 18 13.828 18 11 18H9c-2.828 0-4.243 0-5.121-.879C3 16.243 3 14.828 3 12zm14 6h1a4 4 0 0 0 0-8h-1"></svg:path><svg:path d="M17 13H3" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M22 21H2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCupLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
