import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAnchorRoundIcon],svg[icon-park-anchor-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 38C42 28.0589 33.9411 18 24 18C14.0589 18 6 28.0589 6 38"></svg:path><svg:path d="M20 14L10 14"></svg:path><svg:path d="M38 14H28"></svg:path><svg:circle cx="7" cy="14" r="3" fill="#2F88FF"></svg:circle><svg:circle cx="41" cy="14" r="3" fill="#2F88FF"></svg:circle><svg:circle cx="24" cy="14" r="4" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkAnchorRoundIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
