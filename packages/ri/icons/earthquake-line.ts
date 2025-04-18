import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riEarthquakeLineIcon],svg[ri-earthquake-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21a1 1 0 0 1-.993-.883L4 20v-9H1l10.327-9.388a1 1 0 0 1 1.246-.08l.1.08L23 11h-3v9a1 1 0 0 1-.883.993L19 21zm7-17.298L6 9.156V19h4.357l1.393-1.5L8 14l5-3l-2.5-2l3-3l-.5 3l2.5 2l-4 3l3.5 3l-1.25 2H18V9.157z"></svg:path>`,
})
export class RiEarthquakeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
