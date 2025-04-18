import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsChartMediumIcon],svg[hugeicons-chart-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 3h.009M12 6h.009M12 9h.009M12 12h.009M12 15h.009M12 18h.009M6 7c.673-1.122 1.587-2 2.993-2c5.943 0 2.602 12 8.989 12c1.416 0 2.324-.884 3.018-2"></svg:path><svg:path d="M21 21H10c-3.3 0-4.95 0-5.975-1.025S3 17.3 3 14V3"></svg:path></svg:g>`,
})
export class HugeiconsChartMediumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
