import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSippyCupIcon],svg[icon-park-sippy-cup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M34 44L37 16H11L14.5 44H34Z"></svg:path><svg:path d="M24 10L22 4"></svg:path><svg:path d="M6 16H42"></svg:path><svg:path d="M36.9947 25C36.9947 25 42.4654 25 41.968 29.4045C41.4707 33.809 36 32.9281 36 32.9281"></svg:path><svg:path d="M11.0053 25C11.0053 25 5.53463 25 6.03196 29.4045C6.5293 33.809 12 32.9281 12 32.9281"></svg:path><svg:path fill="#2F88FF" d="M37 10H11V16H37V10Z"></svg:path></svg:g>`,
})
export class IconParkSippyCupIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
