import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[duoIconsBuildingIcon],svg[duo-icons-building-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 3a2 2 0 0 1 1.995 1.85L15 5v14h1V9.5a.5.5 0 0 1 .41-.492L16.5 9H18a2 2 0 0 1 1.995 1.85L20 11v8h1a1 1 0 0 1 .117 1.993L21 21H3a1 1 0 0 1-.117-1.993L3 19h1V5a2 2 0 0 1 1.85-1.995L6 3z" class="duoicon-secondary-layer" opacity=".3"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11 7H8v2h3zm0 4H8v2h3zm0 4H8v2h3z" class="duoicon-primary-layer"></svg:path>`,
})
export class DuoIconsBuildingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
