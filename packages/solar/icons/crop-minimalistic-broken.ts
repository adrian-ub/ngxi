import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarCropMinimalisticBrokenIcon],svg[solar-crop-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 19h-9c-3.771 0-5.657 0-6.828-1.172c-.654-.653-.943-1.528-1.07-2.828M5 11V2m3 3h3c3.771 0 5.657 0 6.828 1.172c.654.653.943 1.528 1.07 2.828M2 5h3m14 14v3m0-9v3"></svg:path>`,
})
export class SolarCropMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
