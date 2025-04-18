import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNotebookEye20RegularIcon],svg[fluent-notebook-eye-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5zM6 7V6h6v1zM3 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H9.88a5.3 5.3 0 0 0 .686-.981l.01-.019H13a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v7.197a5.7 5.7 0 0 0-1 .372zm13 2h.5a.5.5 0 0 1 .5.5V8a.5.5 0 0 1-.5.5H16zm.5 3.5H16V12h.5a.5.5 0 0 0 .5-.5V10a.5.5 0 0 0-.5-.5M16 13h.5a.5.5 0 0 1 .5.5V15a.5.5 0 0 1-.5.5H16zM1 15.5C1 14.318 2.736 12 5.5 12c2.761 0 4.5 2.3 4.5 3.5c0 1.182-1.739 3.5-4.5 3.5S1 16.7 1 15.5m3.111 2.079A2.5 2.5 0 1 0 6.89 13.42a2.5 2.5 0 0 0-2.78 4.16m2.636-1.246a1.5 1.5 0 1 0-2.494-1.666a1.5 1.5 0 0 0 2.494 1.666"></svg:path>`,
})
export class FluentNotebookEye20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
