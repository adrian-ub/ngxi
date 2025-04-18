import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinJavaInterfaceIcon],svg[catppuccin-java-interface-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#a6da95" stroke-linecap="round" stroke-linejoin="round" d="M1.5 9.604H8v3.21h3.25v-3.21h3.25V6.396H8v-3.21H4.75v3.21H1.5Z"></svg:path><svg:path fill="none" stroke="#a6da95" stroke-linecap="round" stroke-linejoin="round" d="M4.75 9.604V6.396H8v3.208h3.25V6.396"></svg:path>`,
})
export class CatppuccinJavaInterfaceIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
