import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsHexagonFillIcon],svg[akar-icons-hexagon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.036 1.53a2 2 0 0 1 1.928 0l8 4.4A2 2 0 0 1 22 7.683v8.635a2 2 0 0 1-1.036 1.752l-8 4.4a2 2 0 0 1-1.928 0l-8-4.4A2 2 0 0 1 2 16.317V7.683A2 2 0 0 1 3.036 5.93z"></svg:path>`,
})
export class AkarIconsHexagonFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
