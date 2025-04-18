import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMetaIcon],svg[streamline-meta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.776 4.957c.555-.369 1.145-.594 1.777-.594c1.776 0 2.664 2.665 2.664 4.44c0 1.777-.888 2.665-1.776 2.665c-2.22 0-4.441-7.105-7.993-7.105c-1.777 0-2.665 2.665-2.665 4.44c0 1.777.888 2.665 1.776 2.665c.924 0 1.847-1.229 2.866-2.664"></svg:path>`,
})
export class StreamlineMetaIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
