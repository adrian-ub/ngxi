import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStarThreeQuarter12FilledIcon],svg[fluent-star-three-quarter-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 2.116l-.282-.57a.8.8 0 0 0-1.435 0L4.172 3.798l-2.486.361a.8.8 0 0 0-.444 1.365l1.8 1.753l-.425 2.476a.8.8 0 0 0 1.16.844l2.224-1.17l.999.526z"></svg:path>`,
})
export class FluentStarThreeQuarter12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
