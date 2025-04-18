import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineDonutLargeIcon],svg[ic-baseline-donut-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5.08V2c-5 .5-9 4.81-9 10s4 9.5 9 10v-3.08c-3-.48-6-3.4-6-6.92s3-6.44 6-6.92M18.97 11H22c-.47-5-4-8.53-9-9v3.08C16 5.51 18.54 8 18.97 11M13 18.92V22c5-.47 8.53-4 9-9h-3.03c-.43 3-2.97 5.49-5.97 5.92"></svg:path>`,
})
export class IcBaselineDonutLargeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
