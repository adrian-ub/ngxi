import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerZodiacLeoIcon],svg[tabler-zodiac-leo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M13 17a4 4 0 1 0 8 0M3 16a3 3 0 1 0 6 0a3 3 0 1 0-6 0m4-9a4 4 0 1 0 8 0a4 4 0 1 0-8 0"></svg:path><svg:path d="M7 7c0 3 2 5 2 9m6-9c0 4-2 6-2 10"></svg:path></svg:g>`,
})
export class TablerZodiacLeoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
