import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTornadoRoundedIcon],svg[material-symbols-light-tornado-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.135 6.423L5.342 8.5h13.316l1.207-2.077q.46-.807.003-1.615T18.468 4H5.532q-.945 0-1.401.808t.003 1.615M5.915 9.5l2.327 4h7.516l2.327-4zm2.9 5l1.787 3.096q.46.808 1.398.808t1.398-.808l1.787-3.096z"></svg:path>`,
})
export class MaterialSymbolsLightTornadoRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
