import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gisLocationArrowOIcon],svg[gis-location-arrow-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M86.49.088a2.4 2.4 0 0 0-.882.463L11.34 62.374a2.386 2.386 0 0 0 1.62 4.218l37.957-1.478l17.7 33.612a2.386 2.386 0 0 0 4.462-.707l16.406-95.23a2.386 2.386 0 0 0-2.994-2.7m-2.808 8.277L69.567 90.29L54.439 61.558a2.39 2.39 0 0 0-2.203-1.272L19.79 61.551z" color="currentColor"></svg:path>`,
})
export class GisLocationArrowOIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
