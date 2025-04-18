import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorXmgIcon],svg[cryptocurrency-color-xmg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#004a80"></svg:circle><svg:path fill="#fff" d="M23 19.54L21.517 25H9v-.913l6.79-7.719l-6.653-8.376V7h12.331l.43 4.252h-.79q-.781-1.453-1.328-2.175q-.546-.721-.975-.899q-.303-.147-.834-.21a11 11 0 0 0-1.273-.065h-3.503l5.249 6.54v.315l-6.488 7.365h7.405q.547 0 1-.26q.453-.261.785-.654a5.6 5.6 0 0 0 .615-.873a8 8 0 0 0 .498-1.022z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorXmgIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
