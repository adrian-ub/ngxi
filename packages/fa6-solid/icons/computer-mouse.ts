import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidComputerMouseIcon],svg[fa6-solid-computer-mouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 192h176V0h-16C71.6 0 0 71.6 0 160zm0 32v128c0 88.4 71.6 160 160 160h64c88.4 0 160-71.6 160-160V224zm384-32v-32C384 71.6 312.4 0 224 0h-16v192z"></svg:path>`,
})
export class Fa6SolidComputerMouseIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
