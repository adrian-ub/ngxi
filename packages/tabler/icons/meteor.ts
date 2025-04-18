import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMeteorIcon],svg[tabler-meteor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m21 3l-5 9h5l-6.891 7.086A6.5 6.5 0 1 1 5.254 9.58L13 3l-1 5z"></svg:path><svg:path d="M7 14.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0"></svg:path></svg:g>`,
})
export class TablerMeteorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
