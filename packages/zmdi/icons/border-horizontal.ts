import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiBorderHorizontalIcon],svg[zmdi-border-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 384v-43h43v43zM43 85v43H0V85zM0 299v-43h43v43zm85 85v-43h43v43zM43 0v43H0V0zm85 0v43H85V0zm171 0v43h-43V0zm-86 85v43h-42V85zm0-85v43h-42V0zm128 299v-43h43v43zm-170 85v-43h42v43zM0 213v-42h384v42zM341 0h43v43h-43zm0 128V85h43v43zM171 299v-43h42v43zm85 85v-43h43v43zm85 0v-43h43v43z"></svg:path>`,
})
export class ZmdiBorderHorizontalIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
