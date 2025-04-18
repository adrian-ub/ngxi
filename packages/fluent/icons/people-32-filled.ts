import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPeople32FilledIcon],svg[fluent-people-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 16a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11M23 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8M5 18a3 3 0 0 0-3 3v.15S2 27 10.5 27s8.5-5.85 8.5-5.85V21a3 3 0 0 0-3-3zm18 7c-1.456 0-2.608-.198-3.521-.513c.432-.7.68-1.375.82-1.92a6.4 6.4 0 0 0 .193-1.196l.004-.107l.001-.042V21a4.48 4.48 0 0 0-1.145-3h8.241A2.406 2.406 0 0 1 30 20.406S30 25 23 25"></svg:path>`,
})
export class FluentPeople32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
