import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPower28FilledIcon],svg[fluent-power-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3a1 1 0 1 0-2 0v9a1 1 0 1 0 2 0zm-4.6 3.748a1 1 0 1 0-.8-1.832A11 11 0 0 0 3 15c0 6.075 4.925 11 11 11s11-4.925 11-11c0-4.512-2.717-8.388-6.6-10.084a1 1 0 0 0-.8 1.832A9 9 0 0 1 23 15a9 9 0 1 1-18 0a9 9 0 0 1 5.4-8.252"></svg:path>`,
})
export class FluentPower28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
