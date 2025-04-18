import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CPlusPlusLanguageIcon],svg[fluent-mdl2-c-plus-plus-language-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1920 1408h-512v512h-128v-512H768v-128h512V768h128v512h512zM640 640v512H512V640H0V512h512V0h128v512h512v128z"></svg:path>`,
})
export class FluentMdl2CPlusPlusLanguageIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
