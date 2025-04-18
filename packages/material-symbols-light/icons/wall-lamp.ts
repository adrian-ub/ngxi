import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWallLampIcon],svg[material-symbols-light-wall-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.73 20v-5h1v5zm2.77-2v-1H11q.617 0 1.059-.441q.441-.442.441-1.059V13H8.077q-.404 0-.646-.33t-.112-.714l1.9-6.385q.081-.267.292-.419Q9.723 5 9.996 5h6.008q.273 0 .484.152q.212.152.293.42l1.9 6.384q.13.385-.112.714t-.646.33H13.5v2.5q0 1.039-.73 1.77T11 18z"></svg:path>`,
})
export class MaterialSymbolsLightWallLampIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
