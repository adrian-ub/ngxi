import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFrameReloadSharpIcon],svg[material-symbols-frame-reload-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17q-1.825 0-3.187-1.137T7.1 13h1.55q.325 1.1 1.238 1.8t2.112.7q1.45 0 2.475-1.025T15.5 12t-1.025-2.475T12 8.5q-.725 0-1.35.263t-1.1.737H11V11H7V7h1.5v1.425q.675-.65 1.575-1.037T12 7q2.075 0 3.538 1.463T17 12t-1.463 3.538T12 17m-9 4v-6h2v4h4v2zm12 0v-2h4v-4h2v6zM3 9V3h6v2H5v4zm16 0V5h-4V3h6v6z"></svg:path>`,
})
export class MaterialSymbolsFrameReloadSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
