import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoVolumeOffIcon],svg[fontisto-volume-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.883.133L7.09 5.188v13.625l8.793 5.055c.724.416 1.571-.202 1.571-1.145V1.279c0-.945-.847-1.564-1.571-1.145zM6 5.615l-4.926.01A1.184 1.184 0 0 0 .001 6.888v-.004V17.14a1.167 1.167 0 0 0 1.059 1.246H6zm23.196 2.893l-.887-.884l-3.491 3.491l-3.492-3.491l-.884.884l3.491 3.491l-3.491 3.492l.884.887l3.491-3.491l3.492 3.491l.887-.887L25.702 12z"></svg:path>`,
})
export class FontistoVolumeOffIcon {
  readonly viewBox = input("0 0 29 24")
  readonly width = input("1.21em")
  readonly height = input("1em")
}
