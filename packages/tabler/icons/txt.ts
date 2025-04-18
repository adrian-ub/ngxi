import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTxtIcon],svg[tabler-txt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8h4M5 8v8m12-8h4m-2 0v8m-9-8l4 8m-4 0l4-8"></svg:path>`,
})
export class TablerTxtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
