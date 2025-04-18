import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkInsertTableIcon],svg[icon-park-insert-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path d="M39.3 6H8.7C7.20883 6 6 7.20883 6 8.7V39.3C6 40.7912 7.20883 42 8.7 42H39.3C40.7912 42 42 40.7912 42 39.3V8.7C42 7.20883 40.7912 6 39.3 6Z"></svg:path><svg:path stroke-linecap="round" d="M18 6V42"></svg:path><svg:path stroke-linecap="round" d="M30 6V42"></svg:path><svg:path stroke-linecap="round" d="M6 18H42"></svg:path><svg:path stroke-linecap="round" d="M6 30H42"></svg:path></svg:g>`,
})
export class IconParkInsertTableIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
