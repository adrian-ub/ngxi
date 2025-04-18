import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPhysicsWallahIcon],svg[arcticons-physics-wallah-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.625 25.54v-15.2h4.195a4.357 4.357 0 1 1 0 8.714h-4.196m8.133 5.558l3.227 12.91l3.227-12.91l3.228 12.91l3.227-12.91"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.88 18.706A21.866 21.866 0 0 1 34.932 5.43M13.067 42.57a21.866 21.866 0 0 0 32.054-13.276"></svg:path>`,
})
export class ArcticonsPhysicsWallahIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
