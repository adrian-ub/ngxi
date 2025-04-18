import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDatabaseLockedIcon],svg[hugeicons-database-locked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10.999 8c4.418 0 8-1.344 8-3c0-1.657-3.582-3-8-3s-8 1.343-8 3c0 1.656 3.581 3 8 3m-5 2.841c.601.181 1.274.33 2 .44m3 3.719c-4.419 0-8-1.344-8-3m3 5.841c.601.181 1.274.33 2 .44"></svg:path><svg:path d="M10.999 22c-4.419 0-8-1.344-8-3V5m16 0v5.5m-3.257 5.878c0-.06.009-.825.01-1.26c.001-.396-.034-.78.156-1.13c.71-1.412 2.75-1.268 3.254.171c.088.237.093.613.09.96c-.003.443.006 1.26.006 1.26m-3.516 0c-1.08 0-1.523.779-1.643 1.258c-.12.48-.12 2.22-.048 2.94c.24.899.84 1.27 1.427 1.39c.54.049 2.82.03 3.48.03c.96.019 1.68-.341 1.98-1.42c.06-.36.12-2.34-.03-2.94c-.319-.96-1.05-1.259-1.65-1.259m-3.516 0h3.516"></svg:path></svg:g>`,
})
export class HugeiconsDatabaseLockedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
