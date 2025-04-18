import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTempleHinduIcon],svg[material-symbols-light-temple-hindu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.185 7.5l1.29-4.298V1.5h1v2H13.5v-2h1v1.577L15.816 7.5zM2.5 21.5v-10h1v2h2.866l.307-1h10.654l.308 1H20.5v-2h1v10h-8v-5h-3v5zm4.485-10l.888-3h8.254l.889 3z"></svg:path>`,
})
export class MaterialSymbolsLightTempleHinduIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
