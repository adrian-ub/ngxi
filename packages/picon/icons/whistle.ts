import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconWhistleIcon],svg[picon-whistle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4c2 3-4 4-4 0M0 4V3h1l1-1h2v1h1V2h3v1L5 4"></svg:path>`,
})
export class PiconWhistleIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
