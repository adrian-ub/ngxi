import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhVinylIcon],svg[whh-vinyl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-704q-80 0-136 56.5t-56 136T376 648t135.5 56t136-56T704 512.5t-56-136T512 320m0 320q-53 0-90.5-37.5T384 512t37.5-90.5T512 384t90.5 37.5T640 512t-37.5 90.5T512 640m-.5-192q-26.5 0-45 19T448 512.5t18.5 45t45 18.5t45.5-18.5t19-45t-19-45.5t-45.5-19"></svg:path>`,
})
export class WhhVinylIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
