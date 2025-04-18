import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidBroadcastOneIcon],svg[icon-park-solid-broadcast-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path fill="currentColor" stroke-width="4" d="M24 15a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"></svg:path><svg:path stroke-linecap="round" stroke-width="4" d="M24 15v8m6 0v10M18 23v10"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M7 33V23l34 .013V33"></svg:path><svg:path stroke-linecap="round" stroke-width="5" d="M41 41v1M7 41v1m11-1v1m12-1v1"></svg:path></svg:g>`,
})
export class IconParkSolidBroadcastOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
