import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsRotateAutoIcon],svg[material-symbols-rotate-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.8 16h1.6l.8-2.3h3.65l.8 2.3h1.55l-3.4-9h-1.6zm2.85-3.6l1.3-3.75h.1l1.3 3.75zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12h2q0 1.65.625 3.113t1.713 2.55t2.55 1.725t3.112.637q3.35 0 5.675-2.325T20 12.025T17.675 6.35T12 4.025q-2.225 0-4.038 1.088T5.1 8H8v2H2V4h2v2q1.375-1.825 3.45-2.912T12 2q2.075 0 3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></svg:path>`,
})
export class MaterialSymbolsRotateAutoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
