import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLocationCheckmark12FilledIcon],svg[fluent-location-checkmark-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 5a4.5 4.5 0 0 0-9 0c0 1.863 1.42 3.815 4.2 5.9a.5.5 0 0 0 .6 0c2.78-2.085 4.2-4.037 4.2-5.9M8.354 3.396a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L5.5 5.543l2.146-2.147a.5.5 0 0 1 .708 0"></svg:path>`,
})
export class FluentLocationCheckmark12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
