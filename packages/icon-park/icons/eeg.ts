import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkEegIcon],svg[icon-park-eeg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 16V9C42 7.34315 40.6569 6 39 6H9C7.34315 6 6 7.34315 6 9V16"></svg:path><svg:path d="M6 32V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V32"></svg:path><svg:path d="M5 24H13.075L20 16L27 32L33.975 24H43"></svg:path></svg:g>`,
})
export class IconParkEegIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
