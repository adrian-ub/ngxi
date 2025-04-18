import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWindowDatabase32FilledIcon],svg[fluent-window-database-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v6.653c-.606-.28-1.281-.51-2-.689V11H5v13.5A2.5 2.5 0 0 0 7.5 27H14v1c0 .304.043.644.154 1H7.5A4.5 4.5 0 0 1 3 24.5zm25.5 12.356c-.55.298-1.228.551-2 .743c-1.03.255-2.225.401-3.5.401c-3.866 0-7-1.343-7-3s3.134-3 7-3c1.275 0 2.47.146 3.5.401c.772.192 1.45.444 2 .743c.94.51 1.5 1.155 1.5 1.856c0 .7-.56 1.345-1.5 1.856M16.936 29.5c-.595-.441-.936-.954-.936-1.5v-7.327c.436.33.936.603 1.46.827c1.494.64 3.454 1 5.54 1c1.234 0 2.424-.126 3.5-.361c.726-.16 1.4-.368 2-.622l.04-.017a7 7 0 0 0 1.46-.827V28c0 1.657-3.134 3-7 3c-2.591 0-4.853-.603-6.064-1.5"></svg:path>`,
})
export class FluentWindowDatabase32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
