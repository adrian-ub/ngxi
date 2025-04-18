import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiFloorLampIcon],svg[cbi-floor-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2L10 9h4l2.5-7zm3.79 8L6.92 22h1.064l3.516-9.656V22h1v-9.65L16.012 22h1.064L12.71 10z"></svg:path>`,
})
export class CbiFloorLampIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
