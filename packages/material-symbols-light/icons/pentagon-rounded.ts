import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPentagonRoundedIcon],svg[material-symbols-light-pentagon-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.527 20.5q-.535 0-.954-.298q-.42-.298-.58-.808L2.974 10.33q-.161-.516 0-1.025q.162-.51.616-.808l7.49-5.235q.429-.292.919-.292t.92.292l7.49 5.235q.454.298.615.808q.162.51 0 1.025l-3.017 9.065q-.162.51-.581.808q-.42.298-.954.298z"></svg:path>`,
})
export class MaterialSymbolsLightPentagonRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
