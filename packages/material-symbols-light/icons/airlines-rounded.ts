import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAirlinesRoundedIcon],svg[material-symbols-light-airlines-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.473 18.36l9.33-12.696q.218-.31.569-.487T14.108 5h4.934q.778 0 1.26.59q.48.59.325 1.343l-2.285 11.415q-.055.293-.277.472q-.223.18-.505.18H3.796q-.24 0-.35-.214q-.11-.215.027-.426m10.816-4.975q.799 0 1.351-.545q.552-.544.552-1.332q0-.789-.552-1.34q-.552-.552-1.351-.552q-.784 0-1.325.548t-.541 1.342t.541 1.336t1.325.543"></svg:path>`,
})
export class MaterialSymbolsLightAirlinesRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
