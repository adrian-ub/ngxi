import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLanguageLuaIcon],svg[mdi-language-lua-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 5A8.5 8.5 0 0 0 2 13.5a8.5 8.5 0 0 0 8.5 8.5a8.5 8.5 0 0 0 8.5-8.5A8.5 8.5 0 0 0 10.5 5m3 8a2.5 2.5 0 0 1-2.5-2.5A2.5 2.5 0 0 1 13.5 8a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5m6-11A2.5 2.5 0 0 0 17 4.5A2.5 2.5 0 0 0 19.5 7A2.5 2.5 0 0 0 22 4.5A2.5 2.5 0 0 0 19.5 2"></svg:path>`,
})
export class MdiLanguageLuaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
