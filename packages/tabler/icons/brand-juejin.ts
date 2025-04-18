import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandJuejinIcon],svg[tabler-brand-juejin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m2 12l10 7.422L22 12"></svg:path><svg:path d="m7 9l5 4l5-4m-6-3l1 .8l1-.8l-1-.8z"></svg:path></svg:g>`,
})
export class TablerBrandJuejinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
