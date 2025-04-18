import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBombSharpIcon],svg[material-symbols-bomb-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.65 22.8q-3.125 0-5.312-2.212T1.15 15.25t2.163-5.288T8.6 7.8h.325l1.425-2.475L12.4 6.5l.125-.2q.575-1.075 1.8-1.4t2.3.3l.875.5l-1 1.725l-.875-.5q-.35-.2-.763-.087t-.612.462l-.125.2L16.4 8.8L15 11.3q.575.9.862 1.913t.288 2.087q0 3.125-2.187 5.313T8.65 22.8M20 8.8v-2h3v2zm-5.5-5.5v-3h2v3zm4.875 2.025l-1.4-1.4L20.1 1.8l1.4 1.4z"></svg:path>`,
})
export class MaterialSymbolsBombSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
