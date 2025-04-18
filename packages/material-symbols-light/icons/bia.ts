import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBiaIcon],svg[material-symbols-light-bia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 9.5h4.17q-.287-.302-.44-.667T10.577 8q0-.275.052-.525T10.785 7H7zm8.789.616q1.527 0 2.869-.404T20 8t-1.343-1.711t-2.869-.404t-2.869.404Q11.577 6.692 11.577 8t1.342 1.712t2.87.404M3 19V9.5h3V6h5.606q.754-.596 1.879-.856t2.304-.26q1.928 0 3.57.719Q21 6.321 21 8v11h-5.5v-3.5h-1V19h-3v-3.5h-1V19h-3v-3.5h-1V19z"></svg:path>`,
})
export class MaterialSymbolsLightBiaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
