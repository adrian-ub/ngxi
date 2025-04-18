import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStylusBrushIcon],svg[material-symbols-light-stylus-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15.135q-2.154 0-3.673-1.517t-1.52-3.687q0-1.35.6-2.533t1.461-2.186t1.814-1.81T12.346 2q.385 1.156.974 1.939q.59.782 1.476 1.536q1.302 1.092 1.85 2.147q.546 1.055.546 2.29q0 2.19-1.519 3.706T12 15.135M5 20l.473-1.317q.162-.452.533-.722t.848-.269h10.292q.477 0 .848.27t.533.72L19 20z"></svg:path>`,
})
export class MaterialSymbolsLightStylusBrushIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
