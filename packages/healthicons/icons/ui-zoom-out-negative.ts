import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiZoomOutNegativeIcon],svg[healthicons-ui-zoom-out-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" fill-rule="evenodd" clip-path="url(#healthiconsUiZoomOutNegative0)" clip-rule="evenodd"><svg:path d="M40 21c0 7.18-5.82 13-13 13s-13-5.82-13-13S19.82 8 27 8s13 5.82 13 13m-7 1H21v-2h12z"></svg:path><svg:path d="M0 0h48v48H0zm12.927 32.245l1.705-.12l1.158-1.158A14.94 14.94 0 0 1 12 21c0-8.284 6.716-15 15-15s15 6.716 15 15s-6.716 15-15 15a14.94 14.94 0 0 1-9.784-3.63l-1.346 1.346l-.158 1.4L8.828 42L6 39.172z"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsUiZoomOutNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsUiZoomOutNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
