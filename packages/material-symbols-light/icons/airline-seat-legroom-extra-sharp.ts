import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAirlineSeatLegroomExtraSharpIcon],svg[material-symbols-light-airline-seat-legroom-extra-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.77 16.5h-10v-13h1v12h9zm5.36 3.577L15.386 14.5H5.654v-11h5v7h4.821l3.571 7.292l2.527-1.067l.752 1.433z"></svg:path>`,
})
export class MaterialSymbolsLightAirlineSeatLegroomExtraSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
