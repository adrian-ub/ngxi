import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTailoringIcon],svg[icon-park-tailoring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M12 4V36H44"></svg:path><svg:path stroke-linejoin="round" d="M20 12H36V28"></svg:path><svg:path d="M12 12H4"></svg:path><svg:path d="M36 44V36"></svg:path></svg:g>`,
})
export class IconParkTailoringIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
