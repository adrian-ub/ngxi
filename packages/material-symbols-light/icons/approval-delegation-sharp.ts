import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightApprovalDelegationSharpIcon],svg[material-symbols-light-approval-delegation-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.925 11.05L9.386 7.511l.714-.688l2.825 2.825l5.675-5.65l.689.688zM2.385 21v-8.154h3V21zM14 21.808l-7.616-2.225v-6.737h2.38l7.352 2.712v1.596h-3l-2.597-.925l-.311.752l2.869.942H21V19.5z"></svg:path>`,
})
export class MaterialSymbolsLightApprovalDelegationSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
