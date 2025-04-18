import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTummocIcon],svg[arcticons-tummoc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.512 10.416a15.934 15.934 0 1 0-22.78 22.285l8.764 8.763a3.54 3.54 0 0 0 5.008 0l8.763-8.763a15.934 15.934 0 0 0 .245-22.285"></svg:path><svg:circle cx="24.003" cy="21.43" r="5.311" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.733 32.7a3.541 3.541 0 0 1 5.008-5.008l6.26 6.26l15.628-15.628"></svg:path>`,
})
export class ArcticonsTummocIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
