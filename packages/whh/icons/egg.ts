import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhEggIcon],svg[whh-egg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 0q61 0 117 32.5t96.5 86.5t74 121.5t54 139.5T757 518.5T768 640q0 104-51.5 192.5t-140 140T384 1024t-192.5-51.5t-140-140T0 640q0-55 11-121.5T42.5 380t54-139.5t74-121.5T267 32.5T384 0"></svg:path>`,
})
export class WhhEggIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
