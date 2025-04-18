import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsEraserIcon],svg[proicons-eraser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.788 20.5h9.02m-9.02 0a3.47 3.47 0 0 0 2.486-1.02l1.29-1.29M9.788 20.5a3.47 3.47 0 0 1-2.438-1.02l-3.33-3.33a3.48 3.48 0 0 1 0-4.923l1.29-1.29m0 0l5.417-5.417a3.48 3.48 0 0 1 4.923 0l3.33 3.33a3.48 3.48 0 0 1 0 4.924l-5.417 5.416M5.31 9.936l.367.368l7.585 7.585l.301.301"></svg:path>`,
})
export class ProiconsEraserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
