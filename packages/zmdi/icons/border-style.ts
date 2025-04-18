import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiBorderStyleIcon],svg[zmdi-border-style-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 384v-43h43v43zm85 0v-43h43v43zm-256 0v-43h43v43zm86 0v-43h42v43zm170-85v-43h43v43zm0-86v-42h43v42zM0 0h384v43H43v341H0zm341 128V85h43v43z"></svg:path>`,
})
export class ZmdiBorderStyleIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
