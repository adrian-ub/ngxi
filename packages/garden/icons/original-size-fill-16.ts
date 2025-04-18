import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenOriginalSizeFill16Icon],svg[garden-original-size-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15c-.552 0-1-.45-1-1s.45-1 1-1h1v-1c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1zm-8 0c.552 0 1-.45 1-1s-.45-1-1-1H3v-1c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1zm7-10H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1m1-4c-.552 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1zM4 1c.552 0 1 .45 1 1s-.45 1-1 1H3v1c0 .55-.45 1-1 1s-1-.45-1-1V2c0-.55.45-1 1-1z"></svg:path>`,
})
export class GardenOriginalSizeFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
