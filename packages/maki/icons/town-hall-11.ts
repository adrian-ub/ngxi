import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiTownHall11Icon],svg[maki-town-hall-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M5.5 0L1 2v1h9V2L5.5 0zM2 4v4L1 9v1h9V9L9 8V4H2zm1 1h1v3H3V5zm2 0h1v3H5V5zm2 0h1v3H7V5z" fill="currentColor"></svg:path>`,
})
export class MakiTownHall11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
