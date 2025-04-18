import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiBorderInnerIcon],svg[zmdi-border-inner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 384v-43h43v43zm85 0v-43h43v43zM43 85v43H0V85zM0 299v-43h43v43zM128 0v43H85V0zM43 0v43H0V0zm256 0v43h-43V0zm42 128V85h43v43zm0-128h43v43h-43zm-85 384v-43h43v43zM213 0v171h171v42H213v171h-42V213H0v-42h171V0zm128 384v-43h43v43zm0-85v-43h43v43z"></svg:path>`,
})
export class ZmdiBorderInnerIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
