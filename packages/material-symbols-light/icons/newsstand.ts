import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNewsstandIcon],svg[material-symbols-light-newsstand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 19.385v-1h19v1zm2.346-3.77v-7h1v7zm3.77 0v-11h1v11zm3.769 0v-11h1v11zm6.307 0l-3.5-6.115l.866-.5l3.5 6.116z"></svg:path>`,
})
export class MaterialSymbolsLightNewsstandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
