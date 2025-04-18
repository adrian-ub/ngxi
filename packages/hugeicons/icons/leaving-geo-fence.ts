import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLeavingGeoFenceIcon],svg[hugeicons-leaving-geo-fence-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 17V3m0 0c-.373 0-.673.343-1.273 1.028L9 6m3-3c.373 0 .673.343 1.273 1.028L15 6M5 15c-1.25.633-2 1.439-2 2.316C3 19.35 7.03 21 12 21s9-1.65 9-3.684c0-.877-.75-1.683-2-2.316" color="currentColor"></svg:path>`,
})
export class HugeiconsLeavingGeoFenceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
