import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPicoocIcon],svg[arcticons-picooc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m42.5 42.5l-16-16m16-21l-16 16m-21 21l15.672-15.672a4 4 0 0 0 0-5.656L5.5 5.5"></svg:path>`,
})
export class ArcticonsPicoocIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
