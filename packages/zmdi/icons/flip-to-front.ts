import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiFlipToFrontIcon],svg[zmdi-flip-to-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 213v-42h43v42zm0 86v-43h43v43zm43 85q-18 0-30.5-12.5T0 341h43zM0 128V85h43v43zm256 256v-43h43v43zM341 0q18 0 30.5 12.5T384 43v213q0 18-12.5 30.5T341 299H128q-18 0-30.5-12.5T85 256V43q0-18 12.5-30.5T128 0zm0 256V43H128v213zM171 384v-43h42v43zm-86 0v-43h43v43z"></svg:path>`,
})
export class ZmdiFlipToFrontIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
