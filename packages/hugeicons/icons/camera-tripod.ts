import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCameraTripodIcon],svg[hugeicons-camera-tripod-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 10c0-3.507 0-5.26.908-6.44q.25-.325.554-.592C4.57 2 6.212 2 9.5 2h5c3.288 0 4.931 0 6.038.968q.304.268.554.592C22 4.74 22 6.493 22 10s0 5.26-.908 6.44a4 4 0 0 1-.554.591C19.43 18 17.788 18 14.5 18h-5c-3.287 0-4.931 0-6.038-.968a4 4 0 0 1-.554-.592C2 15.26 2 13.507 2 10m15 12l-4.167-4M7 22l4.167-4M12 18v5"></svg:path><svg:circle cx="12" cy="9.5" r="3"></svg:circle></svg:g>`,
})
export class HugeiconsCameraTripodIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
