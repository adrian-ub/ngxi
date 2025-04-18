import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsProfitIcon],svg[hugeicons-profit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 2a7 7 0 1 0 0 14a7 7 0 0 0 0-14m3 16c-2 0-3 1.5-3 1.5s1 1.5 3 1.5s3-1.5 3-1.5s-1-1.5-3-1.5m-6 0c-2 0-3 1.5-3 1.5S7 21 9 21s3-1.5 3-1.5S11 18 9 18m3 4v-6"></svg:path><svg:path d="M10.438 11.667V6.333m1.562 0V5m0 8v-1.333M10.438 9h3.124m0 0c.518 0 .938.448.938 1v.667c0 .552-.42 1-.937 1H9.5M13.563 9c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.937-1H9.5"></svg:path></svg:g>`,
})
export class HugeiconsProfitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
