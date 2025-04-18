import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBloodDropDonationIcon],svg[streamline-blood-drop-donation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.092 8.954C2.092 4.308 7 .6 7 .6s4.908 3.708 4.908 8.354c0 3.002-2.486 4.446-4.908 4.446s-4.908-1.444-4.908-4.446"></svg:path><svg:path d="M6.379 6.014a.38.38 0 0 0-.382.382v1.076H4.92a.38.38 0 0 0-.382.382v1.242c0 .212.171.383.382.383h1.076v1.075c0 .211.17.382.382.382H7.62a.38.38 0 0 0 .383-.382V9.479h1.075a.38.38 0 0 0 .382-.383V7.854a.38.38 0 0 0-.382-.382H8.004V6.396a.38.38 0 0 0-.383-.382H6.38Z"></svg:path></svg:g>`,
})
export class StreamlineBloodDropDonationIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
