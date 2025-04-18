import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uisColumnsIcon],svg[uis-columns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3v18c0 .6.4 1 1 1h8V2H3c-.6 0-1 .4-1 1m19-1h-8v20h8c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1"></svg:path>`,
})
export class UisColumnsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
