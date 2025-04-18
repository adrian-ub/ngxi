import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMijnuvaIcon],svg[arcticons-mijnuva-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.5 19.5l9 9m0-9l-9 9m0-23l9 9m0-9l-9 9m0 19l9 9m0-9l-9 9m-4.218-24.864v7.343c0 5.386 1.56 7 7 7c4.176 0 10.436 0 10.436-4.25m0 4.25V17.636"></svg:path>`,
})
export class ArcticonsMijnuvaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
