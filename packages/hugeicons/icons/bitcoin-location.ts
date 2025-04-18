import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBitcoinLocationIcon],svg[hugeicons-bitcoin-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18 18.268c1.245.396 2 .916 2 1.485C20 20.994 16.418 22 12 22s-8-1.006-8-2.247c0-.57.755-1.09 2-1.485m4.438-6.601V6.333m1.562 0V5m0 8v-1.333M10.438 9h3.124m0 0c.518 0 .938.448.938 1v.667c0 .552-.42 1-.937 1H9.5M13.563 9c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.937-1H9.5"></svg:path><svg:path d="M13.347 18.462A1.95 1.95 0 0 1 12 19a1.95 1.95 0 0 1-1.347-.538c-3.31-3.18-7.744-6.732-5.581-11.89C6.24 3.785 9.048 2 12 2s5.759 1.784 6.928 4.573c2.16 5.15-2.264 8.72-5.58 11.889"></svg:path></svg:g>`,
})
export class HugeiconsBitcoinLocationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
