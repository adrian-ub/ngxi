import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePhoneRinging2Icon],svg[streamline-phone-ringing-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.632 1.438h-5.99a.856.856 0 0 0-.856.855v9.414c0 .472.383.855.855.855h5.99a.856.856 0 0 0 .856-.855V2.293a.856.856 0 0 0-.855-.856Zm-3.424 8.985h.856m7.206-6.631c1.556 1.772 1.556 4.645 0 6.416m-1.666-5.25c.778 1.128.778 2.956 0 4.084"></svg:path>`,
})
export class StreamlinePhoneRinging2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
