import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHexagonStripIcon],svg[icon-park-hexagon-strip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19.0002 4H29.0002V15.3397L38.8207 9.66982L43.8207 18.3301L34.0002 24L43.8207 29.6698L38.8207 38.3301L29.0002 32.6602V44H19.0002V32.6602L9.17969 38.3301L4.17969 29.6698L14.0002 24L4.17969 18.3301L9.17969 9.66982L19.0002 15.3397V4Z"></svg:path>`,
})
export class IconParkHexagonStripIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
