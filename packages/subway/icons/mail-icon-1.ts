import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayMailIcon1Icon],svg[subway-mail-icon-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M291.1 147.9V41.3L120.5 212l170.7 170.7V284c96.4 6.7 165 39.4 220.8 199c0-90.8 8.2-296.7-220.9-335.1m-120.4-26.3V41.3L0 212l170.7 170.7v-80.3L80.3 212z"></svg:path>`,
})
export class SubwayMailIcon1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
