import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkInternalDataIcon],svg[icon-park-internal-data-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 18V9C6 7.34315 7.34315 6 9 6H39C40.6569 6 42 7.34315 42 9V18"></svg:path><svg:path d="M32 24V31"></svg:path><svg:path d="M24 15V31"></svg:path><svg:path d="M16 19V31"></svg:path><svg:path d="M6 30V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V30"></svg:path></svg:g>`,
})
export class IconParkInternalDataIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
