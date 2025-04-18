import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidPianoIcon],svg[icon-park-solid-piano-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M4 8h40v16H4z"></svg:path><svg:path d="M4 24h40v16H4zm6 0v8m6-8v8m10-8v8m6-8v8m6-8v8"></svg:path></svg:g>`,
})
export class IconParkSolidPianoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
