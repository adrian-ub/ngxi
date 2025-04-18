import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsApprovalDelegationSharpIcon],svg[material-symbols-approval-delegation-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.925 11.05L8.675 6.8L10.1 5.4l2.825 2.825l5.675-5.65l1.4 1.4zM1 22V11h4v11zm13 0l-7-1.975V11h1.975L17 14v2h-4l-1.75-.675l-.35.925L13 17h9v2z"></svg:path>`,
})
export class MaterialSymbolsApprovalDelegationSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
