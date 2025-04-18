import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uisBorderInnerIcon],svg[uis-border-inner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 12c0-.6-.4-1-1-1h-7V4c0-.6-.4-1-1-1s-1 .4-1 1v7H4c-.6 0-1 .4-1 1s.4 1 1 1h7v7c0 .6.4 1 1 1s1-.4 1-1v-7h7c.5 0 1-.4 1-1M4 15c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.5-1-1-1m0 4c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.5-1-1-1M4 9c.6 0 1-.4 1-1s-.5-1-1-1s-1 .4-1 1s.4 1 1 1m0-4c.6 0 1-.4 1-1s-.5-1-1-1s-1 .4-1 1s.4 1 1 1m4 0c.6 0 1-.4 1-1s-.5-1-1-1s-1 .4-1 1s.4 1 1 1m8 0c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1M8 19c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.5-1-1-1m8 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.5-1-1-1m4-4c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.5-1-1-1m0 4c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.5-1-1-1m0-10c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1m0-4c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1"></svg:path>`,
})
export class UisBorderInnerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
