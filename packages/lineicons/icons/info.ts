import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsInfoIcon],svg[lineicons-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.563 18.89a.75.75 0 1 0 1.5 0V8.39a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0 0 1.5h.75z"></svg:path>`,
})
export class LineiconsInfoIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
