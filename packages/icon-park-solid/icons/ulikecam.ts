import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidUlikecamIcon],svg[icon-park-solid-ulikecam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-width="4" d="M22 44c9.941 0 18-8.059 18-18S31.941 8 22 8S4 16.059 4 26s8.059 18 18 18Zm19-34a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"></svg:path>`,
})
export class IconParkSolidUlikecamIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
