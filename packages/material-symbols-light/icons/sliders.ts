import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSlidersIcon],svg[material-symbols-light-sliders-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 14q-.846 0-1.423-.577T3 12t.577-1.423T5 10h14q.846 0 1.423.577T21 12t-.577 1.423T19 14zm9-1h5q.425 0 .713-.288T20 12t-.288-.712T19 11h-5z"></svg:path>`,
})
export class MaterialSymbolsLightSlidersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
