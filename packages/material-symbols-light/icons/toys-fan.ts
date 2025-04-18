import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightToysFanIcon],svg[material-symbols-light-toys-fan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12q0-1.91 1.372-3.282t3.282-1.372t3.282 1.372T21.308 12zm-4.654 4.654q-1.91 0-3.281-1.372Q2.692 13.909 2.692 12H12q0 1.91-1.372 3.282t-3.282 1.372M12 12q-1.91 0-3.282-1.372T7.346 7.346t1.372-3.282T12 2.692zm0 9.308V12q1.91 0 3.282 1.372t1.372 3.282t-1.372 3.282T12 21.308"></svg:path>`,
})
export class MaterialSymbolsLightToysFanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
