import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKionIcon],svg[arcticons-kion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.167 20h14v8h-14zM43.5 20v8l-8-8v8m-20.667-8v8M4.5 20v8m7-8L8 24l3.5 4M8 24H4.5"></svg:path>`,
})
export class ArcticonsKionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
