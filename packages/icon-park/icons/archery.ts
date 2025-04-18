import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkArcheryIcon],svg[icon-park-archery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" d="M13 42C22.9411 42 31 33.9411 31 24C31 14.0589 22.9411 6 13 6"></svg:path><svg:circle cx="9" cy="24" r="3" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 24L42 24"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M38 20L42 24L38 28"></svg:path></svg:g>`,
})
export class IconParkArcheryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
