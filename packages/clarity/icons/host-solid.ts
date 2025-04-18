import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityHostSolidIcon],svg[clarity-host-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="18" cy="25.64" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M26.5 1.86h-17A1.5 1.5 0 0 0 8 3.36v30.5h20V3.36a1.5 1.5 0 0 0-1.5-1.5M18 28.64a3 3 0 1 1 3-3a3 3 0 0 1-3 3m6-17H12v-1.6h12Zm0-4H12V6.06h12Z"></svg:path>`,
})
export class ClarityHostSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
