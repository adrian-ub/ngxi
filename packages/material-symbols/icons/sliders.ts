import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSlidersIcon],svg[material-symbols-sliders-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 15q-1.25 0-2.125-.875T2 12t.875-2.125T5 9h14q1.25 0 2.125.875T22 12t-.875 2.125T19 15zm9-2h5q.425 0 .713-.288T20 12t-.288-.712T19 11h-5z"></svg:path>`,
})
export class MaterialSymbolsSlidersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
