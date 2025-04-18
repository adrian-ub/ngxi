import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEcoPowerIcon],svg[hugeicons-eco-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9 20c-3.771-.868-6-4.323-6-7.49c0-3.766 3.37-7.487 5.736-9.635a3.367 3.367 0 0 1 4.528 0c1.507 1.368 3.31 3.375 4.487 5.625"></svg:path><svg:path d="M17 15.5c-1.5 1-4 3-6 6.5m2-3c-2.664-5.86 2.835-7.764 6.925-7.984c.494-.027.74-.04.918.131c.177.17.166.415.146.902C20.82 16.102 18.995 21.607 13 19"></svg:path></svg:g>`,
})
export class HugeiconsEcoPowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
