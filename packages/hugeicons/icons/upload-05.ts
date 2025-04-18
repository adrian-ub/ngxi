import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUpload05Icon],svg[hugeicons-upload-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 5v10m0-10c-.7 0-2.008 1.994-2.5 2.5M12 5c.7 0 2.008 1.994 2.5 2.5M5 19h14" color="currentColor"></svg:path>`,
})
export class HugeiconsUpload05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
