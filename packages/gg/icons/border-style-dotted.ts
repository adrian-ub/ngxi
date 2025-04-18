import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggBorderStyleDottedIcon],svg[gg-border-style-dotted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 11H1v2h2zm4 0H5v2h2zm2 0h2v2H9zm6 0h-2v2h2zm2 0h2v2h-2zm6 0h-2v2h2z"></svg:path>`,
})
export class GgBorderStyleDottedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
