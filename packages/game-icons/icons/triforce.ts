import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsTriforceIcon],svg[game-icons-triforce-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 59.72L142.687 256h226.625zM369.313 256L256 452.28h226.625zM256 452.28L142.687 256L29.376 452.28z"></svg:path>`,
})
export class GameIconsTriforceIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
