import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightApprovalDelegationOutlineIcon],svg[material-symbols-light-approval-delegation-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.925 11.05L9.386 7.511l.714-.688l2.825 2.825l5.675-5.65l.689.688zm-6.521 7.604l7.565 2.207l5.989-1.85q-.03-.455-.276-.656q-.248-.201-.548-.201h-4.742q-.636 0-1.151-.05q-.516-.05-1.056-.238l-2.19-.718l.338-.988l2.025.732q.483.183 1.096.22q.613.036 1.68.042q0-.468-.171-.756t-.494-.402l-5.753-2.112q-.058-.019-.106-.028t-.106-.01h-2.1zm-4 2.346v-8.154h6.08q.137 0 .283.028q.147.028.277.078l5.779 2.117q.537.204.924.733q.388.529.388 1.352h3q.903 0 1.384.565q.481.566.481 1.435v.615l-6.98 2.154l-7.616-2.22V21zm1-1h2v-6.154h-2z"></svg:path>`,
})
export class MaterialSymbolsLightApprovalDelegationOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
