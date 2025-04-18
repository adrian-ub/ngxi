import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSeoIcon],svg[hugeicons-seo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m5 20l2.413-2.413m0 0a4.444 4.444 0 1 0 6.285-6.285a4.444 4.444 0 0 0-6.285 6.285"></svg:path><svg:path d="M3 15.188a7.4 7.4 0 0 1-1-3.726C2 7.341 5.358 4 9.5 4h5c4.142 0 7.5 3.341 7.5 7.462c0 3.25-2.087 6.014-5 7.038"></svg:path></svg:g>`,
})
export class HugeiconsSeoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
