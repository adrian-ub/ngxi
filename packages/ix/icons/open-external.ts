import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixOpenExternalIcon],svg[ix-open-external-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M213.333 128v42.666H128V384h213.333v-85.334h42.666v128H85.334V128zM448 64v170.667h-42.667v-97.832L228.418 313.752l-30.17-30.17l176.915-176.916h-97.83V64z"></svg:path>`,
})
export class IxOpenExternalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
