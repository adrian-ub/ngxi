import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNotebookSection20RegularIcon],svg[fluent-notebook-section-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2.5a.5.5 0 0 0-1 0V3H8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h5v.5a.5.5 0 0 0 1 0zM13 16H8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5z"></svg:path>`,
})
export class FluentNotebookSection20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
