import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDeleteThemesIcon],svg[icon-park-delete-themes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" stroke-linejoin="round" d="M8 15H40L37 44H11L8 15Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M20.002 25.0024V35.0026"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M28.0024 24.9995V34.9972"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M12 14.9999L28.3242 3L36 15"></svg:path></svg:g>`,
})
export class IconParkDeleteThemesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
