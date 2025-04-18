import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStockpotRoundedIcon],svg[material-symbols-light-stockpot-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.423 19q-1.01 0-1.716-.707T4 16.577V8.481q0-.213.144-.356T4.5 7.98h15q.213 0 .356.144T20 8.48v8.096q0 1.01-.707 1.716T17.577 19zM9.5 5.596v-.769q0-.351.23-.59T10.317 4h3.366q.358 0 .587.238t.23.589v.77h5q.213 0 .356.143q.144.144.144.357t-.144.356t-.356.143h-15q-.213 0-.356-.144T4 6.096t.144-.356t.356-.144z"></svg:path>`,
})
export class MaterialSymbolsLightStockpotRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
