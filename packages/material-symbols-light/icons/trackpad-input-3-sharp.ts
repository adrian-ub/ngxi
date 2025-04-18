import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTrackpadInput3SharpIcon],svg[material-symbols-light-trackpad-input-3-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.652 21l-5.09-5.077l1.004-1.054l2.78.652V8.02h1v6.308h1.77V6.75h1v7.577h1.769V8.519h1v5.808h1.769v-.5h1V17.5q0 1.458-1.021 2.479T18.153 21zM3 18V4h17v1H4v12h2.416l.993 1z"></svg:path>`,
})
export class MaterialSymbolsLightTrackpadInput3SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
