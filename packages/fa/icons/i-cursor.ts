import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faICursorIcon],svg[fa-i-cursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 128q-320 0-320 224v416h128v128H512v544q0 224 320 224h64v128h-64q-272 0-384-146q-112 146-384 146H0v-128h64q320 0 320-224V896H256V768h128V352q0-224-320-224H0V0h64q272 0 384 146Q560 0 832 0h64v128z"></svg:path>`,
})
export class FaICursorIcon {
  readonly viewBox = input("0 0 896 1792")
  readonly width = input("0.5em")
  readonly height = input("1em")
}
