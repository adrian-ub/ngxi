import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiRoadblockIcon],svg[maki-roadblock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 14a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13M12 6v3H3V6z"></svg:path>`,
})
export class MakiRoadblockIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
