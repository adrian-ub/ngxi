import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidFlaskIcon],svg[icon-park-solid-flask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M37.845 35.022L44 41.316V44H4v-2.684l6.118-6.257z"></svg:path><svg:path stroke-linecap="round" d="M10.104 35.074L18 27V6h12v21l7.873 8.05M11 35h26m-7-21h-6m6 6h-6"></svg:path></svg:g>`,
})
export class IconParkSolidFlaskIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
