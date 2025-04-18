import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsApprovalDelegationOutlineSharpIcon],svg[material-symbols-approval-delegation-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.925 11.05L8.675 6.8L10.1 5.4l2.825 2.825l5.675-5.65l1.4 1.4zM14 22.5l-7-1.95V22H1V11h7.95L17 14v2h5v4zM3 20h2v-7H3zm10.95.4l5.95-1.85V18h-7.075L9.7 16.95l.6-1.9l2.925.95H15v-.65L8.6 13H7v5.5z"></svg:path>`,
})
export class MaterialSymbolsApprovalDelegationOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
