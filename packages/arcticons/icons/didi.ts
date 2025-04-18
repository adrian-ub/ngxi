import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDidiIcon],svg[arcticons-didi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.71 10.355H4.5v7.79a19.5 19.5 0 0 0 19.5 19.5h0a19.5 19.5 0 0 0 19.5-19.5"></svg:path>`,
})
export class ArcticonsDidiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
