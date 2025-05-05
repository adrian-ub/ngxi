import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconKaabaIcon],svg[picon-kaaba-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0L0 1.5L4 3l4-1.5m-8 0l4-1l4 1V7L4 8L0 7m7-2H6v2h1"></svg:path>`,
})
export class PiconKaabaIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
