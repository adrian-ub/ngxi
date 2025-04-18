import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightApprovalDelegationRoundedIcon],svg[material-symbols-light-approval-delegation-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.51 21.671l-7.125-2.088v-6.737h2.08q.156 0 .293.028t.273.078l6.021 2.21q.408.144.716.565q.309.421.309.81q0 .294-.17.455t-.453.162h-1.202q-.567 0-1.053-.07q-.485-.07-.893-.217l-1.433-.502q-.161-.056-.313.016q-.152.071-.202.207q-.05.162.025.318t.236.211l1.572.525q.453.16.976.22q.523.061 1.021.061h5.158q.704 0 1.179.44T21 19.5l-6.529 2.16q-.192.061-.478.064q-.285.003-.483-.053M2.385 19.923v-6q0-.46.308-.768q.309-.309.769-.309h.846q.46 0 .768.309q.309.309.309.768v6q0 .46-.309.768q-.309.309-.768.309h-.846q-.46 0-.769-.309q-.308-.308-.308-.768m10.54-10.275l5.34-5.315q.14-.14.332-.134t.338.153q.14.14.14.344t-.14.345l-5.444 5.444q-.243.242-.566.242t-.565-.242l-2.62-2.62q-.146-.146-.152-.353t.158-.354q.146-.14.354-.134t.354.153z"></svg:path>`,
})
export class MaterialSymbolsLightApprovalDelegationRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
