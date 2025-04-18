import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAllMatchOutlineIcon],svg[material-symbols-light-all-match-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 19l5.5-7L3 4.98h11.673q.379 0 .717.156q.339.155.556.453L21 12l-.183.214q-.29-.162-.587-.277q-.297-.114-.647-.175l-4.39-5.55q-.097-.116-.212-.174t-.27-.057H5L9.75 12L5 18h6.442q0 .256.018.506t.07.494zm14.371.827l2.84-2.796l-.626-.627l-2.214 2.182l-.955-.975l-.627.633zM18 22.288q-1.748 0-2.96-1.212t-1.213-2.96t1.213-2.961T18 13.942t2.96 1.213t1.213 2.96t-1.213 2.961T18 22.288"></svg:path>`,
})
export class MaterialSymbolsLightAllMatchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
