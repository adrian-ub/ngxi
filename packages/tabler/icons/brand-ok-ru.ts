import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandOkRuIcon],svg[tabler-brand-ok-ru-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 9a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path><svg:path d="M20 12c0 8 0 8-8 8s-8 0-8-8s0-8 8-8s8 0 8 8"></svg:path><svg:path d="M9.5 13c1.333.667 3.667.667 5 0m-5 4l2.5-3l2.5 3M12 13.5v.5"></svg:path></svg:g>`,
})
export class TablerBrandOkRuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
