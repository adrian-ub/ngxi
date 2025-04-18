import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageFingerprintMinimalIcon],svg[mage-fingerprint-minimal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12.036 12.158s-.986 4.736 4.492 6.993"></svg:path><svg:path d="M13.752 20.952c-2.871-1.621-5.086-4.726-4.725-8.127a4.05 4.05 0 0 1 1.737-3.306a2.935 2.935 0 0 1 3.9 1.261c.942 1.388.275 3.179.964 4.641c1.06 1.801 3.75 1.346 4.767-.297c1.526-2.352.715-5.943-.843-8.105c-2.447-3.337-6.043-5.107-11.14-3.338c-4.789 1.632-7.162 8.381-4.64 12.863"></svg:path><svg:path d="M7.982 19.002a9 9 0 0 1-1.864-3.484a8.9 8.9 0 0 1-.183-3.933a6.4 6.4 0 0 1 .91-2.45A6.6 6.6 0 0 1 8.662 7.23a6.3 6.3 0 0 1 3.578-.869c.811.025 1.61.208 2.349.537s1.406.798 1.96 1.38a8.28 8.28 0 0 1 1.692 5.51"></svg:path></svg:g>`,
})
export class MageFingerprintMinimalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
