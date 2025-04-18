import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiWallNyroIcon],svg[cbi-wall-nyro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 18.667h2.133L18.267 17.6v-5.067L4.4 10.133V9.067l4.267-1.334l13.066 3.734H22v-1.334l-13.333-4.8L2 7.2Z"></svg:path>`,
})
export class CbiWallNyroIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
