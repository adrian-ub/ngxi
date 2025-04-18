import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCollapseAllRoundedIcon],svg[material-symbols-light-collapse-all-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 16.708l-4.246 4.246q-.14.14-.344.15t-.364-.15t-.16-.354t.16-.354l4.221-4.221q.306-.306.733-.306t.733.306l4.22 4.221q.141.14.15.345q.01.203-.15.363q-.159.16-.353.16t-.354-.16zm0-9.416l4.246-4.246q.14-.14.345-.15q.203-.01.363.15t.16.354t-.16.354l-4.221 4.221q-.306.306-.733.306t-.733-.306l-4.22-4.221q-.141-.14-.15-.344t.15-.364t.353-.16t.354.16z"></svg:path>`,
})
export class MaterialSymbolsLightCollapseAllRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
