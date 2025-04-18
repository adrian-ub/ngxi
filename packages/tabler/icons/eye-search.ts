import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerEyeSearchIcon],svg[tabler-eye-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0"></svg:path><svg:path d="M12 18q-.492 0-.97-.05Q6.271 17.452 3 12q3.6-6 9-6q5.197 0 8.727 5.558M15 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0m5.2 2.2L22 22"></svg:path></svg:g>`,
})
export class TablerEyeSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
