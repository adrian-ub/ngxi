import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uisBorderHorizontalIcon],svg[uis-border-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 11H4c-.6 0-1 .4-1 1s.4 1 1 1h16c.6 0 1-.4 1-1s-.4-1-1-1m-8 4c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m0 4c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m0-10c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1m0-4c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1M4 15c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m0 4c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1M4 9c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1m0-4c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1m4 0c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1m8 0c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1M8 19c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m8 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m4-4c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m0 4c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m0-12c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m0-2c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1"></svg:path>`,
})
export class UisBorderHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
