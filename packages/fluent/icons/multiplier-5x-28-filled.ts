import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMultiplier5x28FilledIcon],svg[fluent-multiplier-5x-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 8a1 1 0 0 0-.993.883l-.5 4.25a1 1 0 0 0 1.112 1.11l2.567-.308a2.29 2.29 0 1 1 .273 4.565h-.148a2.44 2.44 0 0 1-1.836-.833l-.722-.826a1 1 0 1 0-1.506 1.317l.723.826a4.44 4.44 0 0 0 3.34 1.516h.15a4.29 4.29 0 1 0-.512-8.55l-1.306.156l.247-2.106H14.5a1 1 0 1 0 0-2zm7.793 6.293a1 1 0 0 1 1.414 0L20 15.586l1.293-1.293a1 1 0 0 1 1.414 1.414L21.414 17l1.293 1.293a1 1 0 0 1-1.414 1.414L20 18.414l-1.293 1.293a1 1 0 0 1-1.414-1.414L18.586 17l-1.293-1.293a1 1 0 0 1 0-1.414M6.5 19.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"></svg:path>`,
})
export class FluentMultiplier5x28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
