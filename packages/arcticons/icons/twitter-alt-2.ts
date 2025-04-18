import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTwitterAlt2Icon],svg[arcticons-twitter-alt-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.5 41.5h-7.368L6.5 6.5h7.368l27.632 35zM21.941 26.059L6.5 41.5m35-35L26.059 21.941"></svg:path>`,
})
export class ArcticonsTwitterAlt2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
