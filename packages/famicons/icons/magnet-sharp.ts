import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsMagnetSharpIcon],svg[famicons-magnet-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M191.98 463.58v-48M90.16 421.4l33.94-33.94m-76.12-67.88h48"></svg:path><svg:path fill="currentColor" d="M422.2 89.82a144 144 0 0 0-203.71-.07l-67.88 67.88l67.88 67.89l67.88-67.89a48 48 0 0 1 68.46.59c18.3 18.92 17.48 49.24-1.14 67.86l-67.32 67.32l67.88 67.88l66.91-66.91c56.37-56.37 57.37-148.15 1.04-204.55M82.719 225.517l45.254-45.254l67.883 67.882L150.6 293.4zM218.49 361.27l45.254-45.254l67.882 67.882l-45.255 45.255z"></svg:path>`,
})
export class FamiconsMagnetSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
