import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWaterfallsHIcon],svg[icon-park-solid-waterfalls-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M20 6H6v11h14zm22 25H28v11h14zm0-25H28v17h14zM20 25H6v17h14z"></svg:path>`,
})
export class IconParkSolidWaterfallsHIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
