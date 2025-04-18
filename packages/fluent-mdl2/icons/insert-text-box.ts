import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2InsertTextBoxIcon],svg[fluent-mdl2-insert-text-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 388v1524H268v-384h116v268h1548V504h-780V388zM374 1272H0v-44q19-3 38-5t37-8q14-4 30-26t32-49t27-53t19-41l388-918h82l382 928q9 22 21 50t29 53t38 44t49 22t56 3v44H782v-44h37q20 0 37-3t30-16t12-37q0-22-11-60t-26-80t-30-79t-26-62H359q-9 23-26 61t-34 80t-29 79t-13 60q0 24 12 35t30 16t38 4t37 2zm28-509h344L570 385z"></svg:path>`,
})
export class FluentMdl2InsertTextBoxIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
