import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6BrandsDeviantartIcon],svg[fa6-brands-deviantart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m320 93.2l-98.2 179.1l7.4 9.5H320v127.7H159.1l-13.5 9.2l-43.7 84c-.3 0-8.6 8.6-9.2 9.2H0v-93.2l93.2-179.4l-7.4-9.2H0V102.5h156l13.5-9.2l43.7-84c.3 0 8.6-8.6 9.2-9.2H320z"></svg:path>`,
})
export class Fa6BrandsDeviantartIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}
