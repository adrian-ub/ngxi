import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsDataBankIcon],svg[lets-icons-data-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="2" d="M6 14h12a3 3 0 1 1 0 6H6a3 3 0 1 1 0-6Z"></svg:path><svg:path stroke="currentColor" stroke-width="2" d="M3 17c0-1.41 1.491-7.294 2.37-10.642c.22-.835.33-1.252.572-1.57c.212-.278.5-.5.823-.635C7.134 4 7.57 4 8.445 4h7.11c.875 0 1.311 0 1.68.153c.323.135.611.357.823.635c.242.318.352.735.571 1.57C19.51 9.706 21 15.59 21 17"></svg:path><svg:rect width="2" height="2" x="17" y="16" fill="currentColor" rx="1"></svg:rect><svg:rect width="4" height="2" x="5" y="16" fill="currentColor" rx="1"></svg:rect></svg:g>`,
})
export class LetsIconsDataBankIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
