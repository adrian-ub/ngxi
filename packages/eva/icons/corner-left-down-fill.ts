import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaCornerLeftDownFillIcon],svg[eva-corner-left-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 5h-5a3 3 0 0 0-3 3v8.92l-3.38-2.7a1 1 0 0 0-1.24 1.56l5 4a1 1 0 0 0 1.24 0l5-4a1 1 0 1 0-1.24-1.56L12 16.92V8a1 1 0 0 1 1-1h5a1 1 0 0 0 0-2"></svg:path>`,
})
export class EvaCornerLeftDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
