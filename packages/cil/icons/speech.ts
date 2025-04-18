import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilSpeechIcon],svg[cil-speech-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 240h32v32h-32zm96 0h32v32h-32zm96 0h32v32h-32z"></svg:path><svg:path fill="currentColor" d="M464 32H48a32.036 32.036 0 0 0-32 32v288a32.036 32.036 0 0 0 32 32h64v112h30.627l112-112H464a32.036 32.036 0 0 0 32-32V64a32.036 32.036 0 0 0-32-32m0 320H241.373L144 449.373V352H48V64h416Z"></svg:path>`,
})
export class CilSpeechIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
