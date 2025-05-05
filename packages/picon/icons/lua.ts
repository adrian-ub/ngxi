import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconLuaIcon],svg[picon-lua-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2c3.5 3.5-2 8-5 5c-3-4 2-8 5-5H4v2h2V0h2v2"></svg:path>`,
})
export class PiconLuaIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
