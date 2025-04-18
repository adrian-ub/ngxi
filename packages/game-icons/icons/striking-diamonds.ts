import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsStrikingDiamondsIcon],svg[game-icons-striking-diamonds-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30.875 36.063L88.25 300.625L202.406 400.97l24.688-76.814L30.874 36.062zm102 42.343L333.72 198.344l96.374 2.375l-46.78-68.345l-250.44-53.97zm3.5 42.28l202 284.595l149.5 78.626L440.78 365.78L136.376 120.69z"></svg:path>`,
})
export class GameIconsStrikingDiamondsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
