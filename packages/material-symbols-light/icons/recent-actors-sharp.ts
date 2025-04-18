import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRecentActorsSharpIcon],svg[material-symbols-light-recent-actors-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.77 18V6h12v12zm1-2.573q1.1-.708 2.35-1.106t2.65-.398t2.65.398t2.35 1.106V7h-10zm5.004-2.485q-1.02 0-1.733-.709q-.714-.71-.714-1.729t.71-1.733q.709-.713 1.728-.713t1.733.709t.714 1.729t-.71 1.733q-.709.713-1.729.713M17 18V6h1v12zm4.23 0V6h1v12z"></svg:path>`,
})
export class MaterialSymbolsLightRecentActorsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
