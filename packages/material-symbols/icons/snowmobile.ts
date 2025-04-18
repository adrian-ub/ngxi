import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSnowmobileIcon],svg[material-symbols-snowmobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 20H2q-.95 0-1.475-.625T0 18q0-.5.25-.975t.8-.775l3.5-1.9L0 13l2-4l9 1l3.05-2.275l-.8-.725H11V5h3.05l7.125 6.625q.475.425.65.838t.175.787q0 1.075-.825 1.913t-2.5.837l2.15 2H21q.425 0 .713-.288T22 17h2q0 1.25-.875 2.125T21 20h-6v-2h2.925l-2-2H12q0 1.65-1.175 2.825T8 20m-6-2h6q.825 0 1.413-.587T10 16l-2.75-.825z"></svg:path>`,
})
export class MaterialSymbolsSnowmobileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
