import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phUniteFillIcon],svg[ph-unite-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 164a76 76 0 0 1-151.9 3.9a76 76 0 1 1 79.8-79.8A76.1 76.1 0 0 1 240 164"></svg:path>`,
})
export class PhUniteFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
