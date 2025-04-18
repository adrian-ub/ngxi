import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uisHorizontalAlignLeftIcon],svg[uis-horizontal-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 10h-5V7c0-.6-.4-1-1-1H4V3c0-.6-.4-1-1-1c-.5 0-1 .4-1 1v18c0 .6.4 1 1 1s1-.4 1-1v-3h17c.6 0 1-.4 1-1v-6c0-.6-.4-1-1-1m-7 0H4V8h10z"></svg:path>`,
})
export class UisHorizontalAlignLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
