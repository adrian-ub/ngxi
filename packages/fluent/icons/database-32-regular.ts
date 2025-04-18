import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDatabase32RegularIcon],svg[fluent-database-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 7c0-2.761-4.925-5-11-5S5 4.239 5 7v18c0 2.761 4.925 5 11 5s11-2.239 11-5zm-2 0c0 .114-.193.871-2.05 1.715C21.276 9.477 18.82 10 16 10s-5.275-.523-6.95-1.285C7.192 7.87 7 7.115 7 7s.193-.871 2.05-1.715C10.724 4.523 13.18 4 16 4s5.275.523 6.95 1.285C24.808 6.13 25 6.885 25 7m0 2.876V25c0 .114-.193.871-2.05 1.715C21.276 27.477 18.82 28 16 28s-5.275-.523-6.95-1.285C7.192 25.87 7 25.115 7 25V9.876C8.99 11.16 12.28 12 16 12s7.01-.84 9-2.124"></svg:path>`,
})
export class FluentDatabase32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
