import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFastfoodSharpIcon],svg[material-symbols-light-fastfood-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.442 15.385q0-2.187 2.064-3.209t4.552-1.022t4.552 1.022t2.063 3.209zm0 3.307v-1h13.231v1zm0 3.308v-1h13.231v1zm15.231 0v-6.61q0-2.355-1.757-3.93q-1.758-1.575-4.16-2.064l-.429-3.011h4.615v-4h1v4h4.616L19.95 22z"></svg:path>`,
})
export class MaterialSymbolsLightFastfoodSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
