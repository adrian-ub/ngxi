import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiLandmarkJp11Icon],svg[maki-landmark-jp-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M6.75 3.5A1.25 1.25 0 1 1 5.5 2.25A1.25 1.25 0 0 1 6.75 3.5zm-4 2.75A1.25 1.25 0 1 0 4 7.5a1.25 1.25 0 0 0-1.25-1.25zm5.5 0A1.25 1.25 0 1 0 9.5 7.5a1.25 1.25 0 0 0-1.25-1.25z" fill="currentColor"></svg:path>`,
})
export class MakiLandmarkJp11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
