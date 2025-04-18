import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCloudCheckIcon],svg[streamline-cloud-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m9.803 8.55l-3.206 3.606l-1.603-1.202"></svg:path><svg:path d="M10.773 10.993a2.73 2.73 0 0 0 .61-5.388a.25.25 0 0 1-.173-.2a3.868 3.868 0 0 0-7.509-.91a.23.23 0 0 1-.21.127a3.192 3.192 0 0 0-.255 6.343"></svg:path></svg:g>`,
})
export class StreamlineCloudCheckIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
