import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneThermometerOneIcon],svg[icon-park-twotone-thermometer-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTThermometerOne0"><svg:path fill="#555" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M24 44a9 9 0 0 0 4-17.064V10c0-2 0-6-4-6s-4 4-4 6v16.936A9 9 0 0 0 24 44Z"></svg:path></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTThermometerOne0)"></svg:path>`,
})
export class IconParkTwotoneThermometerOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
