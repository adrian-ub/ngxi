import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[galaFolderIcon],svg[gala-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="16"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M 240.04121,64.000608 240,208 c -0.005,15.99988 -16.04134,32 -32,32 H 48 C 31.958138,240 15.996182,223.99988 16,208 l 0.04199,-175.999258"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m 224,48 c 8.83652,8e-6 15.99999,7.163485 16,16"></svg:path><svg:path d="m 144.04154,48.000675 h 79.99974"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m 106.38483,16.000772 a 15.999945,15.999945 0 0 1 13.85635,7.999985"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M 144.04154,48.000675 A 15.999945,15.999945 0 0 1 130.18519,40.00069"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M 144.04154,48.000675 A 15.999945,15.999945 0 0 0 130.18519,56.00066"></svg:path><svg:path d="m 120.24118,24.000757 9.94401,15.999933"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m 106.3848,80.000579 a 15.999945,15.999945 0 0 0 13.85638,-7.999986"></svg:path><svg:path d="M 120.24118,72.000593 130.18519,56.00066"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m 16,80 90.38472,5.79e-4"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m 32.041967,16.000772 c -8.836533,3e-6 -15.999992,7.167628 -15.999978,16.004161"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M 32.041967,16.000772 H 106.38498"></svg:path></svg:g>`,
})
export class GalaFolderIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
