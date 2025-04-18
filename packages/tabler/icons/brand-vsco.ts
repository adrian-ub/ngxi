import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandVscoIcon],svg[tabler-brand-vsco-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path d="M17 12a5 5 0 1 0-10 0a5 5 0 0 0 10 0m-5-9v4m9 5h-4m-5 9v-4m-9-5h4m11.364-6.364l-2.828 2.828m2.828 9.9l-2.828-2.828m-9.9 2.828l2.828-2.828m-2.828-9.9l2.828 2.828"></svg:path></svg:g>`,
})
export class TablerBrandVscoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
