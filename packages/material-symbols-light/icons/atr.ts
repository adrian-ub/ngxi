import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAtrIcon],svg[material-symbols-light-atr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.923 18.654q-1.01 0-1.716-.707q-.707-.706-.707-1.716t.707-1.717t1.716-.706t1.717.707t.706 1.716q0 1.01-.707 1.716q-.706.707-1.716.707m10.154 0q-1.01 0-1.716-.707q-.707-.707-.707-1.716q0-1.01.707-1.717t1.716-.706t1.716.707t.707 1.716t-.707 1.716q-.706.707-1.716.707M12 10.192q-1.01 0-1.716-.706t-.707-1.717t.707-1.716q.706-.707 1.716-.707t1.716.707q.707.707.707 1.716q0 1.01-.707 1.717T12 10.192"></svg:path>`,
})
export class MaterialSymbolsLightAtrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
