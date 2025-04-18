import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSiyuanIcon],svg[arcticons-siyuan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8 38l9-9l7 7l7-7l9 8.95V38V19l-9-9l-7 7l-7-7l-9 9zm9-28v19m7-12v19m7-26v19"></svg:path>`,
})
export class ArcticonsSiyuanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
