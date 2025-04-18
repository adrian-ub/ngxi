import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWaterfallDown01Icon],svg[hugeicons-waterfall-down-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21H10c-3.3 0-4.95 0-5.975-1.025S3 17.3 3 14V3m17 14v-3m-4 0V8m-4 6v-3m-4 0V5" color="currentColor"></svg:path>`,
})
export class HugeiconsWaterfallDown01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
