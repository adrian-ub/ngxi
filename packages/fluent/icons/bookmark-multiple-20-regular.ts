import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBookmarkMultiple20RegularIcon],svg[fluent-bookmark-multiple-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.268 3A2 2 0 0 1 8 2h4.5A3.5 3.5 0 0 1 16 5.5v10a.5.5 0 0 1-.777.416L15 15.768V5.5A2.5 2.5 0 0 0 12.5 3zM6 4a2 2 0 0 0-2 2v11.5a.5.5 0 0 0 .777.416L9 15.101l4.223 2.815A.5.5 0 0 0 14 17.5V6a2 2 0 0 0-2-2zM5 6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v10.566l-3.723-2.482a.5.5 0 0 0-.554 0L5 16.566z"></svg:path>`,
})
export class FluentBookmarkMultiple20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
