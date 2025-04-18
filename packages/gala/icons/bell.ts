import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[galaBellIcon],svg[gala-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.233"><svg:path d="M 33.866678,59.266666 A 4.2333331,4.2333331 0 0 1 29.633345,63.5" transform="translate(16)scale(3.77953)"></svg:path><svg:path d="M -25.4,59.266666 A 4.2333331,4.2333331 0 0 1 -29.633333,63.5" transform="matrix(-3.77953 0 0 3.77953 16 0)"></svg:path><svg:path d="m 25.400031,55.033482 v 4.233333" transform="translate(16)scale(3.77953)"></svg:path><svg:path d="m 33.866698,55.033482 -1.9e-5,4.233332" transform="translate(16)scale(3.77953)"></svg:path><svg:path d="m 55.033333,50.8 c -8.466667,4.233333 -21.166667,4.233333 -25.4,4.233333" transform="translate(16)scale(3.77953)"></svg:path><svg:path d="m 55.033333,50.8 c 0,-8.466667 -8.466667,-4.233336 -8.466667,-25.400002 0,-9.466021 -8.466666,-16.9330112 -12.699988,-16.9330112" transform="translate(16)scale(3.77953)"></svg:path><svg:path d="M 4.233334,50.8 C 12.7,55.033333 25.4,55.033333 29.633333,55.033333" transform="translate(16)scale(3.77953)"></svg:path><svg:path d="m 4.2333451,50.799681 c 0,-8.466669 8.4666669,-4.233338 8.4666669,-25.400003 0,-9.46602 8.466666,-16.9330108 12.699988,-16.9330108" transform="translate(16)scale(3.77953)"></svg:path><svg:path d="m -25.400012,-8.4666872 a 4.2333331,4.2333331 0 0 1 -4.233333,4.2333331" transform="rotate(180 8 0)scale(3.77953)"></svg:path><svg:path d="m 33.866666,-8.4666672 a 4.2333331,4.2333331 0 0 1 -4.233333,4.2333331" transform="matrix(3.77953 0 0 -3.77953 16 0)"></svg:path></svg:g>`,
})
export class GalaBellIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
