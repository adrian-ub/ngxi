import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSlidersIcon],svg[fa-sliders-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M352 1152v128H0v-128zm352-128q26 0 45 19t19 45v256q0 26-19 45t-45 19H448q-26 0-45-19t-19-45v-256q0-26 19-45t45-19zm160-384v128H0V640zM224 128v128H0V128zm1312 1024v128H800v-128zM576 0q26 0 45 19t19 45v256q0 26-19 45t-45 19H320q-26 0-45-19t-19-45V64q0-26 19-45t45-19zm640 512q26 0 45 19t19 45v256q0 26-19 45t-45 19H960q-26 0-45-19t-19-45V576q0-26 19-45t45-19zm320 128v128h-224V640zm0-512v128H672V128z"></svg:path>`,
})
export class FaSlidersIcon {
  readonly viewBox = input("0 0 1536 1408")
  readonly width = input("1.1em")
  readonly height = input("1em")
}
