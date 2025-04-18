import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAnalysisTextLinkIcon],svg[hugeicons-analysis-text-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21 21H10c-3.3 0-4.95 0-5.975-1.025S3 17.3 3 14V3m4 1h1M7 7h4"></svg:path><svg:path d="M5 20c1.07-1.947 2.523-6.981 5.306-6.981c1.924 0 2.422 2.453 4.308 2.453C17.857 15.472 17.387 10 21 10"></svg:path></svg:g>`,
})
export class HugeiconsAnalysisTextLinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
