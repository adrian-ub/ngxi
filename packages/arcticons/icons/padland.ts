import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPadlandIcon],svg[arcticons-padland-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.75 42.5L5.5 30.366V5.5l9.25 12.134zm9.25 0l-9.25-12.134V5.5L24 17.634zm9.25 0L24 30.366V5.5l9.25 12.134zm9.25 0l-9.25-12.134V5.5l9.25 12.134z"></svg:path>`,
})
export class ArcticonsPadlandIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
