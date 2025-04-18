import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDirectionsOffSharpIcon],svg[material-symbols-light-directions-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.11 22.53l-5.13-5.134L12 21.377L2.623 12l4.694-4.694l5.78 5.76V14.5L1.886 3.308l.713-.714l19.223 19.223zM8.5 14.48h1v-3h2.006l-1-1H9.308q-.33 0-.568.24q-.24.24-.24.568zm9.6.797l-3.035-3.054l1.243-1.242L14 8.692v1.789h-.677L8.723 5.9L12 2.623L21.377 12z"></svg:path>`,
})
export class MaterialSymbolsLightDirectionsOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
