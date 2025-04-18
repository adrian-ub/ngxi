import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidInspectionIcon],svg[icon-park-solid-inspection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M43 33V19H5v22a2 2 0 0 0 2 2h17"></svg:path><svg:path stroke-linejoin="round" d="M5 10a2 2 0 0 1 2-2h34a2 2 0 0 1 2 2v9H5z"></svg:path><svg:path stroke-linecap="round" d="M16 5v8m16-8v8"></svg:path><svg:circle cx="30" cy="32" r="7" fill="currentColor"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m36 37l6 5"></svg:path></svg:g>`,
})
export class IconParkSolidInspectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
