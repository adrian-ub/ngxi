import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowCurveDownLeft24FilledIcon],svg[fluent-arrow-curve-down-left-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.868 3.254a1 1 0 0 1-.372 1.364c-1.875 1.072-2.711 2.363-3.114 3.696c-.388 1.289-.386 2.643-.383 4.062l.001.374v5.086l3.293-3.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L11 17.836V12.75l-.001-.4c-.005-1.373-.011-3.023.469-4.614c.547-1.816 1.71-3.525 4.036-4.854a1 1 0 0 1 1.364.372"></svg:path>`,
})
export class FluentArrowCurveDownLeft24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
