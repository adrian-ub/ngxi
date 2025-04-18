import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowLeftLongLightIcon],svg[lets-icons-arrow-left-long-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 12h14"></svg:path><svg:path fill="currentColor" d="m2.357 11.786l3.431-2.059A.8.8 0 0 1 7 10.413v3.174a.8.8 0 0 1-1.212.686l-3.43-2.059a.25.25 0 0 1 0-.428"></svg:path></svg:g>`,
})
export class LetsIconsArrowLeftLongLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
