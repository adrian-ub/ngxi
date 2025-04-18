import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightForkRightIcon],svg[material-symbols-light-fork-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 20V5.94L7.4 8.036l-.708-.708L10 4.019l3.308 3.308l-.708.713l-2.1-2.1v8.333q.779-1.217 1.908-1.814t2.498-.597q.583 0 1.121.044t1.052.133l-2.095-2.1l.708-.708L19 12.539l-3.308 3.307l-.707-.707l2.094-2.1q-.525-.089-1.089-.146q-.563-.057-1.107-.057q-1.446 0-2.67.898q-1.225.897-1.713 2.728V20z"></svg:path>`,
})
export class MaterialSymbolsLightForkRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
