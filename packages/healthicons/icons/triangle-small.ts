import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsTriangleSmallIcon],svg[healthicons-triangle-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.894 13.468C24.725 13.18 24.38 13 24 13s-.725.181-.894.468l-12 20.307a.735.735 0 0 0 .043.824c.183.25.504.401.851.401h24c.347 0 .668-.152.85-.401a.735.735 0 0 0 .044-.824z"></svg:path>`,
})
export class HealthiconsTriangleSmallIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
