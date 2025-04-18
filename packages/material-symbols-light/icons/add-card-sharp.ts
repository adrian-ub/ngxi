import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAddCardSharpIcon],svg[material-symbols-light-add-card-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11.192h16V8.808H4zM19.5 21.5v-3h-3v-1h3v-3h1v3h3v1h-3v3zM3 19V5h18v7.5h-1.5q-2.075 0-3.537 1.463T14.5 17.5V19z"></svg:path>`,
})
export class MaterialSymbolsLightAddCardSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
