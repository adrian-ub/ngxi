import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerNutIcon],svg[tabler-nut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19 6.84a2.01 2.01 0 0 1 1 1.754v6.555c0 .728-.394 1.4-1.03 1.753l-6 3.844a2 2 0 0 1-1.94 0l-6-3.844A2 2 0 0 1 4 15.15V8.593c0-.728.394-1.399 1.03-1.753l6-3.582a2.05 2.05 0 0 1 2 0l6 3.582z"></svg:path><svg:path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0"></svg:path></svg:g>`,
})
export class TablerNutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
