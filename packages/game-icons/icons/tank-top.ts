import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsTankTopIcon],svg[game-icons-tank-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m128 37l32-6c16 112 32 150 96 150s80-38 96-150l32 6s-16 160 32 208c0 96 0 112 16 224c-112 16-240 16-352 0c16-112 16-128 16-224c48-48 32-208 32-208"></svg:path>`,
})
export class GameIconsTankTopIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
