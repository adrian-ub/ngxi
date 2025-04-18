import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandDoctrineIcon],svg[tabler-brand-doctrine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 14a7 7 0 1 0 14 0a7 7 0 1 0-14 0m4 0h6"></svg:path><svg:path d="m12 11l3 3l-3 3M10 3l6.9 6"></svg:path></svg:g>`,
})
export class TablerBrandDoctrineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
