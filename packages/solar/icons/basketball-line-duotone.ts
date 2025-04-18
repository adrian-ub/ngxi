import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarBasketballLineDuotoneIcon],svg[solar-basketball-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.34 17c2.76 4.783 8.876 6.42 13.66 3.66a9.96 9.96 0 0 0 4.196-4.731a9.99 9.99 0 0 0-.536-8.93a9.99 9.99 0 0 0-7.465-4.928A9.96 9.96 0 0 0 7 3.339C2.217 6.101.578 12.217 3.34 17Z"></svg:path><svg:path stroke-linecap="round" d="M16.95 20.573S16.01 13.983 14 10.5c-2.01-3.482-6.95-7.073-6.95-7.073m.527 17.39c1.482-4.47 8.875-9.424 14.286-8.237m-5.45-9.371C14.927 7.63 7.675 12.512 2.29 11.452" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBasketballLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
