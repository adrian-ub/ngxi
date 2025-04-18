import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonNumber7Icon],svg[tabler-hexagon-number-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.02 6.858a2 2 0 0 1 1 1.752v6.555c0 .728-.395 1.4-1.032 1.753l-6.017 3.844a2 2 0 0 1-1.948 0l-6.016-3.844a2 2 0 0 1-1.032-1.752V8.61c0-.728.395-1.4 1.032-1.753l6.017-3.582a2.06 2.06 0 0 1 2 0l6.017 3.583h-.029z"></svg:path><svg:path d="M10 8h4l-2 8"></svg:path></svg:g>`,
})
export class TablerHexagonNumber7Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
