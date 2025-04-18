import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinRojoIcon],svg[catppuccin-rojo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#ed8796" stroke-linecap="round" stroke-linejoin="round" d="m2.438 12.065l4.12-10.127m-2.581.897s4.842-2.752 6.86-.352c1.539 2.275-6.443 5.255-6.443 5.255S3.96 9.79 13.562 14.5"></svg:path>`,
})
export class CatppuccinRojoIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
