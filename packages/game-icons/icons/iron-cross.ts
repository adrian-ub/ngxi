import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsIronCrossIcon],svg[game-icons-iron-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M486 371.316V142.75a399.06 399.06 0 0 1-185.685 69.28a399.14 399.14 0 0 1 70.973-186.002H142.72A399.06 399.06 0 0 1 212 211.714A399.14 399.14 0 0 1 26 140.74v228.57a399.06 399.06 0 0 1 185.685-69.28a399.14 399.14 0 0 1-70.973 185.944H369.28A399.06 399.06 0 0 1 300 300.342a399.14 399.14 0 0 1 186 70.974"></svg:path>`,
})
export class GameIconsIronCrossIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
