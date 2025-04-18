import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCricketHelmetIcon],svg[hugeicons-cricket-helmet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21 9.44C19.695 5.663 16.05 3 11.757 3C6.368 3 2 7.281 2 12.562c0 2.941 1.355 5.572 3.487 7.326c1.349 1.11 2.754 1.097 4.447 1.097c1.177 0 2.792.211 3.506-.955c1.255-2.048-1.17-4.9.416-7.005c.468-.621 1.244-.966 2.796-1.655zm0 0l1-.445M10.008 17h-.01"></svg:path><svg:path d="m22 15.911l-4.366.557C15.816 16.7 14.08 15.664 13.5 14"></svg:path><svg:path d="m16 12l.605 5.442c.188 1.692.282 2.538.851 3.048c.57.51 1.421.51 3.124.51H22m-1.5-5v5"></svg:path></svg:g>`,
})
export class HugeiconsCricketHelmetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
