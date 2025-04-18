import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineElevatorIcon],svg[icon-park-outline-elevator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M42 41V7H6v34z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M42 7v34m0-34H4h2v34M42 7h2m-2 34h2m-2 0H6m0 0H4M24 7v34m9-21v8m-3-5l3-3l3 3m-21 5v-8"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m12 25l3 3l3-3"></svg:path></svg:g>`,
})
export class IconParkOutlineElevatorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
