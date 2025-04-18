import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatLevelSliderIcon],svg[fluent-emoji-flat-level-slider-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#BEBEBE" d="M23.958 2H8.042A3.046 3.046 0 0 0 5 5.05v21.9A3.046 3.046 0 0 0 8.042 30h15.916A3.046 3.046 0 0 0 27 26.95V5.05A3.046 3.046 0 0 0 23.958 2"></svg:path><svg:path fill="#636363" d="M7 7.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 7 7.25m.75 8a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zm14 0a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zm0-8.75a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zM7 25.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75m14.75-.75a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z"></svg:path><svg:path fill="#D3D3D3" d="M12.5 9a3.5 3.5 0 1 1 7 0v14a3.5 3.5 0 1 1-7 0z"></svg:path><svg:path fill="#635994" d="M13.5 9a2.5 2.5 0 0 1 5 0v14a2.5 2.5 0 0 1-5 0z"></svg:path><svg:path fill="#00A6ED" d="M11 12a2 2 0 0 1 2-2h6a2 2 0 1 1 0 4h-6a2 2 0 0 1-2-2"></svg:path></svg:g>`,
})
export class FluentEmojiFlatLevelSliderIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
