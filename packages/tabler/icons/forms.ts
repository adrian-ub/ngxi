import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFormsIcon],svg[tabler-forms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3M6 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3m7-14h7a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-7M5 7H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1m12-5h.01M13 12h.01"></svg:path>`,
})
export class TablerFormsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
