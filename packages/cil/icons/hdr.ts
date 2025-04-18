import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilHdrIcon],svg[cil-hdr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 104v288h96a32.036 32.036 0 0 0 32-32V136a32.036 32.036 0 0 0-32-32Zm96 256h-64V136h64Zm-128 32V104h-32v128H64V104H32v288h32V264h64v128zm320-160v-96a32.036 32.036 0 0 0-32-32h-96v288h32V264h29.167L440 331.081V392h32v-67.081L447.632 264H448a32.036 32.036 0 0 0 32-32m-96 0v-96h64v96Z"></svg:path>`,
})
export class CilHdrIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
