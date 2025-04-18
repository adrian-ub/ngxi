import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLotusIcon],svg[icon-park-lotus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M19 16C19.1961 13.8571 20.2353 8.85714 24 6C25.3725 7.66667 28.5294 12 29 16"></svg:path><svg:path fill="#2F88FF" d="M23.7523 42C15.2826 40.5455 -0.301481 31.3091 5.11908 6C12.2712 7.63636 26.0108 17.1273 23.7523 42Z"></svg:path><svg:path fill="#2F88FF" d="M24.2477 42C32.7174 40.5455 48.3015 31.3091 42.8809 6C35.7288 7.63636 21.9892 17.1273 24.2477 42Z"></svg:path></svg:g>`,
})
export class IconParkLotusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
