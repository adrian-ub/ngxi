import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAirlineSeatLegroomNormalSharpIcon],svg[material-symbols-light-airline-seat-legroom-normal-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.942 20.423V14.5h-9.5v-11h5v7h6.347v8.23h2.769v1.693zM13.866 16.5H4.442v-13h1v12h8.424z"></svg:path>`,
})
export class MaterialSymbolsLightAirlineSeatLegroomNormalSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
