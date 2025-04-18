import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBurningCdIcon],svg[hugeicons-burning-cd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15 16.5c0 2.346 0 3.518-.676 4.326a3.2 3.2 0 0 1-.604.554C12.838 22 11.559 22 9 22s-3.838 0-4.72-.62a3.2 3.2 0 0 1-.604-.554C3 20.018 3 18.846 3 16.5v-9c0-2.346 0-3.518.676-4.326a3.2 3.2 0 0 1 .604-.554C5.162 2 6.441 2 9 2s3.838 0 4.72.62q.341.241.604.554C15 3.982 15 5.154 15 7.5zm-3-3v-3m3 4.5a3 3 0 1 0 0-6"></svg:path><svg:path d="M15 19a7 7 0 1 0 0-14"></svg:path></svg:g>`,
})
export class HugeiconsBurningCdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
