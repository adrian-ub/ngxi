import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilTextIcon],svg[cil-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M440 168V88H72v80h64v-48h88v280h-56v32h176v-32h-56V120h88v48z"></svg:path>`,
})
export class CilTextIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
