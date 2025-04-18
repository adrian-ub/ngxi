import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidPentagonOneIcon],svg[icon-park-solid-pentagon-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-width="4" d="m25.23 4.958l17.63 13.743a2 2 0 0 1 .654 2.25l-7.04 19.721A2 2 0 0 1 34.59 42H13.41a2 2 0 0 1-1.884-1.328l-7.04-19.721a2 2 0 0 1 .654-2.25L22.77 4.958a2 2 0 0 1 2.46 0Z"></svg:path>`,
})
export class IconParkSolidPentagonOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
