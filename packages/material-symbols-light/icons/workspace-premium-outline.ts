import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWorkspacePremiumOutlineIcon],svg[material-symbols-light-workspace-premium-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.925 13.277l.779-2.58l-2.05-1.505h2.562L12 6.585l.785 2.607h2.561l-2.056 1.504l.78 2.581L12 11.675zM7 21.462v-6.59q-.95-.935-1.475-2.19Q5 11.43 5 10q0-2.927 2.036-4.963T12 3t4.964 2.036T19 10q0 1.429-.525 2.683T17 14.87v6.59l-5-1.5zM12 16q2.5 0 4.25-1.75T18 10t-1.75-4.25T12 4T7.75 5.75T6 10t1.75 4.25T12 16m-4 4.044l4-1.121l4 1.121v-4.33q-.836.615-1.859.95Q13.12 17 12 17t-2.141-.335T8 15.714zm4-2.165"></svg:path>`,
})
export class MaterialSymbolsLightWorkspacePremiumOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
