import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsTriangleMediumIcon],svg[healthicons-triangle-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.894 10.484C24.725 10.187 24.38 10 24 10s-.725.187-.894.484l-15 26.25a.78.78 0 0 0 .043.851c.183.258.504.415.851.415h30c.347 0 .668-.157.85-.415a.78.78 0 0 0 .044-.851z"></svg:path>`,
})
export class HealthiconsTriangleMediumIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
