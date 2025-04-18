import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsKayakIcon],svg[hugeicons-kayak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20.82 3.18C10.927 1.5 2.073 11.615 3.035 20.924c9.331.96 19.472-7.873 17.787-17.744M6.96 16.996h.008m9.992-10h.008"></svg:path><svg:path d="M9.496 14.478a1.765 1.765 0 0 1 0-2.501l2.469-2.463a1.776 1.776 0 0 1 2.507 0c.692.69.692 1.81 0 2.5l-2.47 2.464c-.692.69-1.814.69-2.506 0M5.759 5.684c.122-2.392-.536-3.355-1.155-3.626c-.357-.157-.746.041-1.061.272c-.594.433-.92.755-1.306 1.35c-.198.303-.324.68-.167 1.006c.525 1.094 2.615 1.253 3.689.998m0 0L18.24 18.317m0 0c-.121 2.392.538 3.354 1.156 3.625c.358.157.747-.042 1.062-.272c.593-.434.919-.756 1.305-1.351c.197-.304.323-.681.166-1.007c-.526-1.093-2.616-1.251-3.69-.995"></svg:path></svg:g>`,
})
export class HugeiconsKayakIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
