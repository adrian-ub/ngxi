import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMoonCloudBigRainIcon],svg[hugeicons-moon-cloud-big-rain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17.478 11h.022a4.5 4.5 0 0 1 4.5 4.5c0 2.325-1.738 4.263-4 4.5m-.522-9q.021-.247.022-.5a5.5 5.5 0 0 0-10.98-.477M17.478 11a5.5 5.5 0 0 1-1.235 3M6.52 10.023A5 5 0 0 0 2 15c0 2.419 1.718 4.512 4 4.975m.52-9.952Q6.757 10 7 10c1.126 0 2.165.372 3 1m-.5 8.503c0-1.255 1.053-2.495 1.792-3.211a1.004 1.004 0 0 1 1.416 0c.739.716 1.792 1.956 1.792 3.211C14.5 20.734 13.553 22 12 22s-2.5-1.266-2.5-2.497"></svg:path><svg:path d="M10 5.138a4.1 4.1 0 0 0-.466-1.253A4.03 4.03 0 0 0 7.136 2a3.18 3.18 0 0 1-1.547 3.138a3.12 3.12 0 0 1-3.465-.216a4.1 4.1 0 0 0 .418 3.04a4.02 4.02 0 0 0 4.594 1.885"></svg:path></svg:g>`,
})
export class HugeiconsMoonCloudBigRainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
