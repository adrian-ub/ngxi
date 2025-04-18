import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6BrandsSpaceAwesomeIcon],svg[fa6-brands-space-awesome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 256h32v256H0V352h32v-32h32v-32h32zm416 96v160H384V256h32v32h32v32h32v32zM320 64h32v384h-32v-32H192v32h-32V64h32V32h32V0h64v32h32zm-32 64h-64v64h64z"></svg:path>`,
})
export class Fa6BrandsSpaceAwesomeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
