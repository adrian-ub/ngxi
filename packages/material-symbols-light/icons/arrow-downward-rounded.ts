import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightArrowDownwardRoundedIcon],svg[material-symbols-light-arrow-downward-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 17.079V5.5q0-.213.143-.357T12 5t.357.143t.143.357v11.579l5.439-5.439q.146-.146.344-.153q.198-.006.363.16q.16.164.163.353q.002.188-.163.354l-6.08 6.08q-.132.131-.268.184t-.298.053t-.298-.053q-.136-.052-.267-.183l-6.081-6.081q-.14-.14-.15-.341q-.01-.202.15-.367q.165-.165.357-.165t.356.165z"></svg:path>`,
})
export class MaterialSymbolsLightArrowDownwardRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
