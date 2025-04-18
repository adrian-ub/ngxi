import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowRightLongLightIcon],svg[lets-icons-arrow-right-long-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17 12H3"></svg:path><svg:path fill="currentColor" d="m21.643 11.786l-3.431-2.059a.8.8 0 0 0-1.212.686v3.174a.8.8 0 0 0 1.212.686l3.43-2.059a.25.25 0 0 0 0-.428"></svg:path></svg:g>`,
})
export class LetsIconsArrowRightLongLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
