import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePayment10Icon],svg[streamline-payment-10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 11.5v2m2.5-3v2m-5-2v2M2.75 4.75a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m8.5.5a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5m-3.186-.861a.83.83 0 0 0-.786-.556h-.645a.744.744 0 0 0-.16 1.47l.983.216a.834.834 0 0 1-.178 1.648h-.556a.83.83 0 0 1-.786-.556M7 2.833V2m0 5v-.833"></svg:path><svg:path d="M12.5.5h-11a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1"></svg:path></svg:g>`,
})
export class StreamlinePayment10Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
