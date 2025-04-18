import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psDiggAltIcon],svg[ps-digg-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M462 93h-59V3H231v89h-59v116H32V92H2v117h30v31h54v54H63v32h77v55H63v-55H32v87h139v-87h-31v-32h-23v-54h87v172h232V233h26zm-91-59v114H262V34zm-36 347v-87h-28v87h-71V208h-33v-83h28v55h172v-55h27v84h-25v172zM140 92V62h32v30zm0-30H63V30h77zM63 92H32V62h31z"></svg:path>`,
})
export class PsDiggAltIcon {
  readonly viewBox = input("0 0 464 464")
  readonly width = input("1em")
  readonly height = input("1em")
}
