import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconPlayIcon],svg[codicon-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.78 2L3 2.41v12l.78.42l9-6V8zM4 13.48V3.35l7.6 5.07z"></svg:path>`,
})
export class CodiconPlayIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
