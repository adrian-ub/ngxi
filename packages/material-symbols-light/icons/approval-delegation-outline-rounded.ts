import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightApprovalDelegationOutlineRoundedIcon],svg[material-symbols-light-approval-delegation-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.925 9.648l5.34-5.315q.14-.14.332-.134t.338.153q.14.14.14.344t-.14.345l-5.444 5.444q-.243.242-.566.242t-.565-.242l-2.62-2.62q-.146-.146-.152-.353t.158-.354q.146-.14.354-.134t.354.153zm.871 11.156q.096.038.173.038t.173-.038l5.816-1.792q-.03-.456-.276-.657t-.547-.201h-4.743q-.636 0-1.151-.05q-.516-.05-1.056-.238l-1.714-.552q-.207-.068-.296-.27t-.021-.41q.067-.188.257-.28q.189-.09.397-.023l1.55.561q.483.164 1.068.21t1.453.052h.256q0-.468-.172-.756t-.494-.402l-5.753-2.112q-.058-.019-.106-.028t-.106-.01h-2.1v4.808zm-.255.988l-7.137-2.088q-.143.592-.605.944T4.789 21h-.77q-.671 0-1.143-.472t-.472-1.144v-4.922q0-.672.472-1.144t1.143-.472h4.466q.136 0 .282.028q.147.028.277.078l5.779 2.117q.537.204.924.733q.388.529.388 1.352h3q.903 0 1.384.565q.481.566.481 1.435q0 .3-.162.506t-.475.311l-5.884 1.815q-.218.062-.46.072t-.479-.066M3.404 19.384q0 .27.173.443t.442.173h.77q.269 0 .442-.144t.173-.472v-5.538H4.019q-.269 0-.442.173t-.173.443z"></svg:path>`,
})
export class MaterialSymbolsLightApprovalDelegationOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
