import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiBorderRightIcon],svg[zmdi-border-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M85 384v-43h43v43zM0 43V0h43v43zm85 0V0h43v43zm0 170v-42h43v42zM0 384v-43h43v43zm171 0v-43h42v43zM0 213v-42h43v42zm0 86v-43h43v43zm0-171V85h43v43zm171 171v-43h42v43zm85-86v-42h43v42zM341 0h43v384h-43zm-85 384v-43h43v43zm0-341V0h43v43zm-85 170v-42h42v42zm0-170V0h42v43zm0 85V85h42v43z"></svg:path>`,
})
export class ZmdiBorderRightIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
