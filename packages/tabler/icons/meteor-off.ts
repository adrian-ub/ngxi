import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMeteorOffIcon],svg[tabler-meteor-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9.75 5.761L13 3l-1 5l9-5l-5 9h5l-2.467 2.536m-1.983 2.04l-2.441 2.51A6.5 6.5 0 1 1 5.254 9.58l2.322-1.972"></svg:path><svg:path d="M7 14.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerMeteorOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
