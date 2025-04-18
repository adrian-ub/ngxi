import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiBorderTopIcon],svg[zmdi-border-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M85 384v-43h43v43zm0-171v-42h43v42zm86 0v-42h42v42zm0 171v-43h42v43zM0 299v-43h43v43zm0 85v-43h43v43zm0-171v-42h43v42zm0-85V85h43v43zm171 171v-43h42v43zm170-171V85h43v43zm0 85v-42h43v42zM0 0h384v43H0zm341 299v-43h43v43zm-85 85v-43h43v43zm-85-256V85h42v43zm170 256v-43h43v43zm-85-171v-42h43v42z"></svg:path>`,
})
export class ZmdiBorderTopIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
