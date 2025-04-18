import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHelmetOffIcon],svg[tabler-helmet-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8.633 4.654a9 9 0 0 1 11.718 11.7m-1.503 2.486A9 9 0 0 1 17.656 20H6.344a9 9 0 0 1-.185-13.847"></svg:path><svg:path d="M20 9h-7m-2.768 1.246q.76 3 3.268 4.254q.786.393 1.64.683M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerHelmetOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
