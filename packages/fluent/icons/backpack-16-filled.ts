import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBackpack16FilledIcon],svg[fluent-backpack-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zm2-7a2 2 0 0 0-2 2v.416A5 5 0 0 0 3 8v2h10V8a5 5 0 0 0-3-4.584V3a2 2 0 0 0-2-2m0 2q-.514 0-1 .1V3a1 1 0 0 1 2 0v.1A5 5 0 0 0 8 3M7 6h2a2 2 0 0 1 2 2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1a2 2 0 0 1 2-2m-1 6.5V11H3v1.5A2.5 2.5 0 0 0 5.5 15h5a2.5 2.5 0 0 0 2.5-2.5V11H7v1.5a.5.5 0 0 1-1 0"></svg:path>`,
})
export class FluentBackpack16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
