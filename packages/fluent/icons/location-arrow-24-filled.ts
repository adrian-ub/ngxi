import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLocationArrow24FilledIcon],svg[fluent-location-arrow-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.896 4.042c.467-1.213-.725-2.405-1.938-1.938L2.962 8.64c-1.36.522-1.252 2.48.156 2.85l7.011 1.845a.75.75 0 0 1 .535.535l1.845 7.01c.37 1.409 2.328 1.516 2.85.157z"></svg:path>`,
})
export class FluentLocationArrow24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
