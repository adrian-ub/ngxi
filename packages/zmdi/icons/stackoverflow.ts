import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiStackoverflowIcon],svg[zmdi-stackoverflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M245 395V250h34v179H0V251l32 1l-1 143zM52 335h167v35H52zm5-63l168 16l-4 36l-168-16zm15-73l163 46l-10 35l-163-46zm40-82l144 87l-19 32l-144-87zm150 81L164 61l30-21l98 137zM272 9l36-6l28 166l-36 6z"></svg:path>`,
})
export class ZmdiStackoverflowIcon {
  readonly viewBox = input("0 0 336 432")
  readonly width = input("0.78em")
  readonly height = input("1em")
}
