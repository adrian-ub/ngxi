import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEnteringGeoFenceIcon],svg[hugeicons-entering-geo-fence-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 17V3m0 14c.373 0 .673-.343 1.273-1.028L15 14m-3 3c-.373 0-.673-.343-1.273-1.028L9 14"></svg:path><svg:path d="M5 15c-1.25.633-2 1.439-2 2.316C3 19.35 7.03 21 12 21s9-1.65 9-3.684c0-.877-.75-1.683-2-2.316"></svg:path></svg:g>`,
})
export class HugeiconsEnteringGeoFenceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
