import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBookmarkMultiple24RegularIcon],svg[fluent-bookmark-multiple-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6.748a2.25 2.25 0 0 1 2.25-2.25h9a2.25 2.25 0 0 1 2.25 2.25V21.25a.75.75 0 0 1-1.127.648l-5.623-3.28l-5.622 3.28A.75.75 0 0 1 4 21.25zm2.25-.75a.75.75 0 0 0-.75.75v13.196l4.873-2.842a.75.75 0 0 1 .755 0l4.873 2.842V6.748a.75.75 0 0 0-.75-.75zm9-3.998A4.75 4.75 0 0 1 20 6.75v11.873a.75.75 0 0 1-1.5 0V6.751a3.25 3.25 0 0 0-3.25-3.25H6.637s.113-.558.797-1.082C8 2 8.602 2 8.602 2z"></svg:path>`,
})
export class FluentBookmarkMultiple24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
