import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTchiboIcon],svg[arcticons-tchibo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.96 29.331c-.96 3.962-4.077 7.634-7.202 8.487s-5.238-1.393-4.882-5.19c.355-3.797 3.062-7.903 6.256-9.49s5.83-.136 6.093 3.354"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.022 8.002c5.152 6.98-14.274 4.546-14.205 8.558c.116 6.754 21.494-5.664 25.466-.132c1.894 2.637 2.131 9.117-13.117 9.542"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsTchiboIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
