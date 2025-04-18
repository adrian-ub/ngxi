import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7LineHorizontal3DecreaseIcon],svg[f7-line-horizontal-3-decrease-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.18 17.816h43.64c1.055 0 1.899-.82 1.899-1.875a1.89 1.89 0 0 0-1.899-1.898H6.18a1.89 1.89 0 0 0-1.899 1.898c0 1.055.844 1.875 1.899 1.875m4.922 12.07h33.914c1.054 0 1.875-.82 1.875-1.874s-.82-1.899-1.875-1.899H11.102c-1.055 0-1.875.844-1.875 1.899c0 1.054.82 1.875 1.875 1.875m4.804 12.071h24.305c1.055 0 1.875-.82 1.875-1.875s-.82-1.898-1.875-1.898H15.906c-1.054 0-1.875.843-1.875 1.898s.82 1.875 1.875 1.875"></svg:path>`,
})
export class F7LineHorizontal3DecreaseIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
