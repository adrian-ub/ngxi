import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uisRulerCombinedIcon],svg[uis-ruler-combined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h6c.6 0 1-.4 1-1v-3H7c-.6 0-1-.4-1-1s.4-1 1-1h3v-2H7c-.6 0-1-.4-1-1s.4-1 1-1h3v-2H7c-.6 0-1-.4-1-1s.4-1 1-1h1V7c0-.6.4-1 1-1s1 .4 1 1v3h2V7c0-.6.4-1 1-1s1 .4 1 1v3h2V7c0-.6.4-1 1-1s1 .4 1 1v3h3c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1"></svg:path>`,
})
export class UisRulerCombinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
