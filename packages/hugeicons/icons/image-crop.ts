import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsImageCropIcon],svg[hugeicons-image-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 20H10c-2.828 0-4.243 0-5.121-.879C4 18.243 4 16.828 4 14V2"></svg:path><svg:path d="M6 20c3.684-3.564 7.823-8.29 14-4.745"></svg:path><svg:path d="M2 4h12c2.828 0 4.243 0 5.121.879C20 5.757 20 7.172 20 10v12"></svg:path><svg:circle cx="8.5" cy="8.5" r="1.5"></svg:circle></svg:g>`,
})
export class HugeiconsImageCropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
