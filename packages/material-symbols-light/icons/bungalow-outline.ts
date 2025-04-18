import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBungalowOutlineIcon],svg[material-symbols-light-bungalow-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 20v-6.796l-1.196 1.904l-.854-.512L12 4.885l6.03 9.711l-.853.512L16 13.223V20zm1-1h2.23v-2.77h1.54V19H15v-7.38L12 6.8l-3 4.8zm2.23-5v-1.538h1.54V14zM9 19h6z"></svg:path>`,
})
export class MaterialSymbolsLightBungalowOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
