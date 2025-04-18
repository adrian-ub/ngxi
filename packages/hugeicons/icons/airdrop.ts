import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAirdropIcon],svg[hugeicons-airdrop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="11" r="2"></svg:circle><svg:path d="M4 17.001A9.96 9.96 0 0 1 2 11C2 5.477 6.477 1 12 1s10 4.477 10 10c0 2.252-.744 4.33-2 6.001"></svg:path><svg:path d="M7.528 15a6 6 0 1 1 8.944 0m-6.52 2.876c.77-1.118 1.156-1.677 1.656-1.82a1.4 1.4 0 0 1 .784 0c.5.143.886.702 1.657 1.82c1.025 1.487 1.538 2.231 1.439 2.851a1.54 1.54 0 0 1-.412.83C14.646 22 13.764 22 12 22s-2.646 0-3.076-.444a1.54 1.54 0 0 1-.412-.829c-.099-.62.414-1.364 1.44-2.851"></svg:path></svg:g>`,
})
export class HugeiconsAirdropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
