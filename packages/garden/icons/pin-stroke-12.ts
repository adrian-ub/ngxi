import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenPinStroke12Icon],svg[garden-pin-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.372.095l.072.06l5.4 5.4a.532.532 0 0 1-.15.858l-.088.032l-1.701.455a.53.53 0 0 1-.441-.078l-.072-.06l-.473-.473l-2.198 5.38a.532.532 0 0 1-.797.235l-.071-.06L3.38 9.372l-2.21 2.21a.532.532 0 0 1-.813-.678l.061-.074l2.21-2.21L.156 6.147a.532.532 0 0 1 .092-.826l.083-.042l5.38-2.198l-.473-.473a.53.53 0 0 1-.154-.42l.016-.093l.455-1.7a.532.532 0 0 1 .817-.3m.154 3.802L1.473 5.96l4.566 4.566l2.064-5.053zm-.182-2.338l-.137.514l3.72 3.72l.514-.137z"></svg:path>`,
})
export class GardenPinStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
