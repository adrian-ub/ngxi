import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiFireStationJp11Icon],svg[maki-fire-station-jp-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M6.375 5.887v2.738a.875.875 0 0 1-1.75 0V5.887A3.75 3.75 0 0 1 1.75 2.25a.75.75 0 0 1 1.5 0a2.25 2.25 0 0 0 4.5 0a.75.75 0 0 1 1.5 0a3.75 3.75 0 0 1-2.875 3.637z" fill="currentColor"></svg:path>`,
})
export class MakiFireStationJp11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
