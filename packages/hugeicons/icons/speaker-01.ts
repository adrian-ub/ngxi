import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSpeaker01Icon],svg[hugeicons-speaker-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3.5 10c0-3.771 0-5.657 1.245-6.828S7.993 2 12 2s6.01 0 7.255 1.172S20.5 6.229 20.5 10v4c0 3.771 0 5.657-1.245 6.828S16.007 22 12 22s-6.01 0-7.255-1.172S3.5 17.771 3.5 14z"></svg:path><svg:circle cx="12" cy="14.5" r="3.5"></svg:circle><svg:path d="M10 6h4"></svg:path></svg:g>`,
})
export class HugeiconsSpeaker01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
