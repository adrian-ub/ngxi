import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSleepIcon],svg[material-symbols-sleep-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"></svg:path>`,
})
export class MaterialSymbolsSleepIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
