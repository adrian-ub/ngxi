import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightApprovalDelegationOutlineSharpIcon],svg[material-symbols-light-approval-delegation-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.925 11.05L9.386 7.511l.714-.688l2.825 2.825l5.675-5.65l.689.688zm1.094 10.873l-7.615-2.22V21h-4v-8.154h6.373l7.358 2.693v1.615H21v2.615zM3.404 20h2v-6.154h-2zm10.565.862l6.008-1.831v-.877h-6.921L9.95 17.142l.33-.957l2.926.969h1.929v-.92l-6.516-2.388H6.404v4.808z"></svg:path>`,
})
export class MaterialSymbolsLightApprovalDelegationOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
