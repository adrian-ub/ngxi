import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMultiplier5x24FilledIcon],svg[fluent-multiplier-5x-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.01 7.859A1 1 0 0 1 8 7h4a1 1 0 1 1 0 2H8.867l-.186 1.301l.35-.055a3.65 3.65 0 0 1 4.219 3.605c0 2.025-1.665 3.649-3.67 3.649a3.7 3.7 0 0 1-2.734-1.207l-.337-.371a1 1 0 1 1 1.482-1.344l.336.37a1.7 1.7 0 0 0 1.253.552c.921 0 1.67-.748 1.67-1.65a1.65 1.65 0 0 0-1.907-1.629l-1.687.267a1 1 0 0 1-1.146-1.13zm7.283 4.434a1 1 0 0 1 1.414 0l.793.793l.793-.793a1 1 0 0 1 1.414 1.414l-.793.793l.793.793a1 1 0 0 1-1.414 1.414l-.793-.793l-.793.793a1 1 0 0 1-1.414-1.414l.793-.793l-.793-.793a1 1 0 0 1 0-1.414M4.75 17a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5"></svg:path>`,
})
export class FluentMultiplier5x24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
