import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDiskOneIcon],svg[icon-park-disk-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" d="M12.7778 17.012C12.7778 16.4531 13.2309 16 13.7899 16H35.7658C36.3247 16 36.7778 16.4531 36.7778 17.012V32C36.7778 38.6274 31.4052 44 24.7778 44V44C18.1504 44 12.7778 38.6274 12.7778 32V17.012Z"></svg:path><svg:rect width="18" height="12" x="15.778" y="4" fill="#2F88FF" stroke="#000"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M21.7778 9V11"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M27.7778 9V11"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M12.7778 32H36.7778"></svg:path></svg:g>`,
})
export class IconParkDiskOneIcon {
  readonly viewBox = input("0 0 49 48")
  readonly width = input("1.03em")
  readonly height = input("1em")
}
