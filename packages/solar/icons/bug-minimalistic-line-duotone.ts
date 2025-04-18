import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarBugMinimalisticLineDuotoneIcon],svg[solar-bug-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5 10a7 7 0 0 1 14 0v5a7 7 0 1 1-14 0z"></svg:path><svg:path stroke-linecap="round" d="M19 13h3M5 13H2m18.5-6l-1.798.72M3.5 7l1.798.72M14.5 3.5L17 2M9.5 3.5L7 2m13.5 17l-2-.8m-15 .8l2-.8m5-7.7h3m-3 5h3" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBugMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
