import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsLiverAlt24pxIcon],svg[healthicons-liver-alt-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4.088 8.186c1.065-.635 5.895-.8 7.492-.269c-1.597 6.92 2.129 6.388 1.597 6.92c-.533.533-4.298 2.398-8.024 1.866S3.079 8.79 4.088 8.186"></svg:path><svg:path d="M20.16 6.908c-2.828.471-4.837.88-6.966.88c-.532-.01-1.528 5.817 1.442 6.351c2.62.47 8.552-7.736 5.524-7.231"></svg:path></svg:g>`,
})
export class HealthiconsLiverAlt24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
