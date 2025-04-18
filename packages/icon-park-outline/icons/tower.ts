import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineTowerIcon],svg[icon-park-outline-tower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M17 31h14v13H17zm2-14h10v14H19zm2-13h6v13h-6z"></svg:path><svg:path stroke-linecap="round" d="M4 44h40"></svg:path></svg:g>`,
})
export class IconParkOutlineTowerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
