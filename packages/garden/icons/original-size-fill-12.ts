import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenOriginalSizeFill12Icon],svg[garden-original-size-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1c.552 0 1 .45 1 1s-.45 1-1 1H3v1c0 .55-.45 1-1 1s-1-.45-1-1V2c0-.55.45-1 1-1zm4 0c-.552 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1zM7 5H5a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2m-3 6c.552 0 1-.45 1-1s-.45-1-1-1H3V8c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1zm4 0c-.552 0-1-.45-1-1s.45-1 1-1h1V8c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1z"></svg:path>`,
})
export class GardenOriginalSizeFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
