import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDatabaseIcon],svg[streamline-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 5.5c3.59 0 6.5-1.12 6.5-2.5S10.59.5 7 .5S.5 1.62.5 3S3.41 5.5 7 5.5"></svg:path><svg:path d="M.5 3v8c0 1.38 2.91 2.5 6.5 2.5s6.5-1.12 6.5-2.5V3"></svg:path><svg:path d="M13.5 7c0 1.38-2.91 2.5-6.5 2.5S.5 8.38.5 7"></svg:path></svg:g>`,
})
export class StreamlineDatabaseIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
