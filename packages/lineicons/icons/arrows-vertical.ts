import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsArrowsVerticalIcon],svg[lineicons-arrows-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m40.8 48.2l-6.5 6.4V9.3l6.5 6.4c.4.4 1 .6 1.6.6s1.2-.2 1.6-.7c.9-.9.9-2.3 0-3.2l-10.4-10c-.9-.9-2.3-.9-3.2 0L20.1 12.6c-.9.9-.9 2.3 0 3.2s2.3.9 3.2 0l6.5-6.4v45.2l-6.5-6.4c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2l10.3 10.2c.4.4 1 .6 1.6.6s1.1-.2 1.6-.6l10.3-10.2c.9-.9.9-2.3 0-3.2c-.8-.8-2.3-.8-3.1 0"></svg:path>`,
})
export class LineiconsArrowsVerticalIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
