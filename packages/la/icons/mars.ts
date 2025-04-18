import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laMarsIcon],svg[la-mars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4v2h7.563l-7.688 7.688C15.523 12.645 13.832 12 12 12c-4.406 0-8 3.594-8 8s3.594 8 8 8s8-3.594 8-8c0-1.832-.645-3.523-1.688-4.875L26 7.437V15h2V4zm-5 10c3.324 0 6 2.676 6 6s-2.676 6-6 6s-6-2.676-6-6s2.676-6 6-6"></svg:path>`,
})
export class LaMarsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
