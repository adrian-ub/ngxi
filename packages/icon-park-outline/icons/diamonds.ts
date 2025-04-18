import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineDiamondsIcon],svg[icon-park-outline-diamonds-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M12 8h24l8 10l-20 24L4 18zM4 18h40M24 42l-8-24m8 24l8-24"></svg:path><svg:path d="m8 13l-4 5l20 24l20-24l-4-5"></svg:path></svg:g>`,
})
export class IconParkOutlineDiamondsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
