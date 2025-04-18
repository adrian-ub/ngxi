import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpRuleFolderIcon],svg[ic-sharp-rule-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6H12l-2-2H2v16h20zM7.83 16L5 13.17l1.41-1.41l1.41 1.41l3.54-3.54l1.41 1.41zm9.58-3L19 14.59L17.59 16L16 14.41L14.41 16L13 14.59L14.59 13L13 11.41L14.41 10L16 11.59L17.59 10L19 11.41z"></svg:path>`,
})
export class IcSharpRuleFolderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
