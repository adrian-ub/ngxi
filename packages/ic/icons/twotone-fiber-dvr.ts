import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneFiberDvrIcon],svg[ic-twotone-fiber-dvr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 11.56v-.89c0-.76-.58-1.33-1.33-1.33h-3.11v5.33h1.33v-1.78h1.02l.76 1.78H20l-.8-1.87c.44-.22.8-.71.8-1.24m-1.33 0h-1.78v-.89h1.78zM7.11 9.33H4v5.33h3.11c.76 0 1.33-.58 1.33-1.33v-2.67c0-.75-.57-1.33-1.33-1.33m0 4H5.33v-2.67h1.78zm7-4h-1.34l-.89 3.05L11 9.33H9.66l1.56 5.34h1.33z"></svg:path><svg:path fill="currentColor" d="M3 5h18v14H3z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M21 3H3c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5c0-1.11-.89-2-2-2m0 16H3V5h18z"></svg:path>`,
})
export class IcTwotoneFiberDvrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
