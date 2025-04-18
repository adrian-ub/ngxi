import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWalletNotFound01Icon],svg[hugeicons-wallet-not-found-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3.47 4q-.17.129-.322.282C2 5.446 2 7.32 2 11.066v1.987c0 3.746 0 5.62 1.148 6.783C4.297 21 6.145 21 9.841 21h5.881c2.092 0 3.395 0 4.278-.375M18.865 14.5c.087-.215.135-.452.135-.7c0-.994-.77-1.8-1.719-1.8c-.281 0-.546.07-.78.196"></svg:path><svg:path d="M18 7c0-.93 0-1.395-.102-1.776a3 3 0 0 0-2.121-2.122C15.395 3 14.93 3 14 3h-4c-.946 0-1.773 0-2.5.018M11.243 7H16c2.828 0 4.243 0 5.121.879C22 8.757 22 10.172 22 13v2c0 .996 0 1.816-.038 2.5M2 2l20 20"></svg:path></svg:g>`,
})
export class HugeiconsWalletNotFound01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
