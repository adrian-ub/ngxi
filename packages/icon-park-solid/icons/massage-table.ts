import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidMassageTableIcon],svg[icon-park-solid-massage-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M14 17a2 2 0 0 1 2-2h26a2 2 0 0 1 2 2v6H14z"></svg:path><svg:path stroke-linecap="round" d="M26 23L14 37m18-14l12 14M14 23H6m33 8H19M6 13v10m8 0v17m30-17v17M9 14l-6-2"></svg:path></svg:g>`,
})
export class IconParkSolidMassageTableIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
