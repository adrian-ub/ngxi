import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirSpiralIcon],svg[iconoir-spiral-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.5 6.004C3.5 7.808 6.357 9 11.5 9c7 0 8-2.996 8-2.996S18.5 3 11.5 3c-5.143 0-8 1.2-8 3.004m0 6c0 1.804 2.857 2.996 8 2.996c7 0 8-2.996 8-2.996S18.5 9 11.5 9c-5.143 0-8 1.2-8 3.004m0 6c0 1.804 2.857 2.996 8 2.996c7 0 8-2.996 8-2.996S18.5 15 11.5 15c-5.143 0-8 1.2-8 3.004M19.5 12s1-.975 1-3s-1-3-1-3m1-2c0 1.35-1 2-1 2m0 12s1-.975 1-3s-1-3-1-3m1 8c0-1.35-1-2-1-2"></svg:path>`,
})
export class IconoirSpiralIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
