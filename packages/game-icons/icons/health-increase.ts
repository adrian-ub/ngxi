import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsHealthIncreaseIcon],svg[game-icons-health-increase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 496c-16.62 0-30-13.38-30-30V346H46c-16.62 0-30-13.38-30-30V196c0-16.62 13.38-30 30-30h120V46c0-16.62 13.38-30 30-30h120c16.62 0 30 13.38 30 30v120h120c16.62 0 30 13.38 30 30v120c0 16.62-13.38 30-30 30H346v120c0 16.62-13.38 30-30 30zm0-135h120l-60-60zm0-75h120l-60-60zm0-75h120l-60-60z"></svg:path>`,
})
export class GameIconsHealthIncreaseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
