import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGeologyCrustIcon],svg[hugeicons-geology-crust-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 2v20m10-10c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path><svg:path d="M12 15a3 3 0 1 1 0-6m0 9.5a6.47 6.47 0 0 1-4-1.376M12 5.5A6.5 6.5 0 0 0 5.813 10m.419 5a6.5 6.5 0 0 1-.656-2M12 5.5c1.624.115 4.185-.27 5.052-2.133m3.016 2.723c-.44.415-.966.759-1.568.91c-2 .5-4 2-2.5 4s3 3.5 1.5 5.5c-.74.985-1.26 2.644.78 3.281"></svg:path></svg:g>`,
})
export class HugeiconsGeologyCrustIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
