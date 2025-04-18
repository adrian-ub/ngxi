import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phInfinityFillIcon],svg[ph-infinity-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-11.72 116.28a40 40 0 0 1-56.4.17l-50.59-45.11L97 111a24 24 0 1 0 0 34c.36-.36.71-.73 1-1.1a8 8 0 1 1 12 10.6c-.55.62-1.13 1.23-1.71 1.81a40 40 0 1 1-.17-56.73l50.58 45.11l.33.31a24 24 0 1 0-.03-34c-.36.36-.7.72-1 1.1a8 8 0 0 1-12-10.59c.54-.62 1.12-1.24 1.71-1.82a40 40 0 0 1 56.57 56.56Z"></svg:path>`,
})
export class PhInfinityFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
