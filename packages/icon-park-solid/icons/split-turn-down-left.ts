import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSplitTurnDownLeftIcon],svg[icon-park-solid-split-turn-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M37 22H21a8 8 0 0 0-8 8v14"></svg:path><svg:circle cx="37" cy="8.944" r="5" fill="currentColor" transform="rotate(-90 37 8.944)"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M37 14v29m5-4l-5 5l-5-5m-14 0l-5 5l-5-5"></svg:path></svg:g>`,
})
export class IconParkSolidSplitTurnDownLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
