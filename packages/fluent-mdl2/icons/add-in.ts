import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2AddInIcon],svg[fluent-mdl2-add-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 128v896h896v1024H0V128zM896 1920v-768H128v768zm0-896V256H128v768zm896 128h-768v768h768zm-128-768h384v128h-384v384h-128V512h-384V384h384V0h128z"></svg:path>`,
})
export class FluentMdl2AddInIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
