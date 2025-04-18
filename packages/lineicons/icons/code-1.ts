import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsCode1Icon],svg[lineicons-code-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.058 4.163a.75.75 0 1 0-1.464-.326l-3.556 16a.75.75 0 1 0 1.465.326zM7.83 7.47a.75.75 0 0 1 0 1.06L4.36 12l3.47 3.47a.75.75 0 1 1-1.061 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 0m9.44 0a.75.75 0 0 0 0 1.06l3.47 3.47l-3.47 3.47a.75.75 0 1 0 1.06 1.06l4-4a.75.75 0 0 0 0-1.06l-4-4a.75.75 0 0 0-1.06 0"></svg:path>`,
})
export class LineiconsCode1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
