import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilGradientIcon],svg[cil-gradient-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M440 40H72a16 16 0 0 0-16 16v400a16 16 0 0 0 16 16h368a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-16 192h-48v48h48v48h-48v40h-48v-40h-48v40h-48v-40h-48v40h-48v-40H88v-48h48v-48H88V72h336Z"></svg:path><svg:path fill="currentColor" d="M136 280h48v48h-48zm48-48h48v48h-48zm48 48h48v48h-48zm48-48h48v48h-48zm48 48h48v48h-48zm-192-96h48v48h-48zm96 0h48v48h-48zm96 0h48v48h-48z"></svg:path>`,
})
export class CilGradientIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
