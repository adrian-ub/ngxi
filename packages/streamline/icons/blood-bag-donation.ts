import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBloodBagDonationIcon],svg[streamline-blood-bag-donation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 7.838V3.5a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v4.338a3 3 0 0 1-2.051 2.846L9.5 11v.5a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V11l-.949-.316A3 3 0 0 1 1.5 7.838"></svg:path><svg:path d="M1.5 8.039c.667-.444 2.7-1.066 5.5 0c2.8 1.065 4.833.222 5.5-.333M8.118 4.661c0-.63-1.118-2.19-1.118-2.19S5.88 4.032 5.88 4.662c0 .31.118.606.328.825s.494.341.79.341a1.1 1.1 0 0 0 .792-.341a1.2 1.2 0 0 0 .327-.825v0ZM7 12.5v1"></svg:path></svg:g>`,
})
export class StreamlineBloodBagDonationIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
