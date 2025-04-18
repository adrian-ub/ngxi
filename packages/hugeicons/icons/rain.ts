import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRainIcon],svg[hugeicons-rain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 7.671C3 5.998 4.474 4.344 5.51 3.39a1.456 1.456 0 0 1 1.98 0C8.527 4.344 10 5.998 10 7.67C10 9.312 8.675 11 6.5 11S3 9.312 3 7.671m5.5 10c0-1.673 1.474-3.327 2.51-4.282a1.456 1.456 0 0 1 1.98 0c1.036.955 2.51 2.609 2.51 4.282C15.5 19.312 14.175 21 12 21s-3.5-1.688-3.5-3.329m5.5-10c0-1.673 1.474-3.327 2.51-4.282a1.456 1.456 0 0 1 1.98 0C19.527 4.344 21 5.998 21 7.67C21 9.312 19.675 11 17.5 11S14 9.312 14 7.671" color="currentColor"></svg:path>`,
})
export class HugeiconsRainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
