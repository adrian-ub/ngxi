import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandMiniprogramIcon],svg[tabler-brand-miniprogram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path d="M8 11.503a2.5 2.5 0 1 0 4 2v-3a2.5 2.5 0 1 1 4 2"></svg:path></svg:g>`,
})
export class TablerBrandMiniprogramIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
