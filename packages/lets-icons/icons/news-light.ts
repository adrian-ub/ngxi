import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsNewsLightIcon],svg[lets-icons-news-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:rect width="14" height="14" x="5" y="5" rx="3"></svg:rect><svg:path stroke-linecap="round" d="M5 10h14"></svg:path></svg:g>`,
})
export class LetsIconsNewsLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
