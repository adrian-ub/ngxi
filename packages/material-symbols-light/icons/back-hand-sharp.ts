import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBackHandSharpIcon],svg[material-symbols-light-back-hand-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.57 22q-1.936 0-3.62-.928t-2.72-2.584l-3.8-6.107l.907-.906L8 14.555V4.5h1v7h2.673v-9h1v9h2.673v-8h1v8H19V5h1v9.589q0 3.095-2.164 5.253Q15.674 22 12.57 22"></svg:path>`,
})
export class MaterialSymbolsLightBackHandSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
