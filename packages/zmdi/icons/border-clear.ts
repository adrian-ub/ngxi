import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiBorderClearIcon],svg[zmdi-border-clear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M85 43V0h43v43zm0 170v-42h43v42zm0 171v-43h43v43zm86-85v-43h42v43zm0 85v-43h42v43zM0 384v-43h43v43zm0-85v-43h43v43zm0-86v-42h43v42zm0-85V85h43v43zm0-85V0h43v43zm171 170v-42h42v42zm170 86v-43h43v43zm0-86v-42h43v42zm0 171v-43h43v43zm0-256V85h43v43zm-170 0V85h42v43zM341 0h43v43h-43zM171 43V0h42v43zm85 341v-43h43v43zm0-171v-42h43v42zm0-170V0h43v43z"></svg:path>`,
})
export class ZmdiBorderClearIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
