import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidRenaultIcon],svg[icon-park-solid-renault-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M30 4H18L8 24h9l5-10h4l5 10h9zm0 40H18L8 24h9l5 10h4l5-10h9z"></svg:path>`,
})
export class IconParkSolidRenaultIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
