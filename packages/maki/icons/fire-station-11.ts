import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiFireStation11Icon],svg[maki-fire-station-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M5.5 0l-2 4L2 2c-.405.712-2 2.167-2 4c0 2.7 2.8 5 5.5 5S11 8.7 11 6c0-1.833-1.595-3.288-2-4L7.5 4l-2-4zm0 5.5s2 1.585 2 3c0 .611-.778 1.278-2 1.278s-2-.667-2-1.278c0-1.366 2-3 2-3z" fill="currentColor"></svg:path>`,
})
export class MakiFireStation11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
