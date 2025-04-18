import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiRadarIcon],svg[oui-radar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.338 2.416l-.682 1.18c-1.94-.585-3.676-.3-4.275.737c-.784 1.36.527 3.769 3.12 5.265c2.591 1.496 5.333 1.428 6.118.069c.598-1.037-.022-2.683-1.5-4.07l.683-1.182c2.055 1.806 2.975 4.18 1.972 5.918c-1.24 2.148-4.793 2.237-7.94.42C2.685 8.935.986 5.815 2.226 3.667c1.003-1.738 3.52-2.128 6.11-1.252zm2.252-1.234l1.154.666l-3.333 5.774l-1.155-.667zm-6.102 12.15h6.846v1.334H3.345a.67.67 0 0 1-.676-.615a.66.66 0 0 1 .087-.385l1.5-2.598l1.155.667l-.923 1.598z"></svg:path>`,
})
export class OuiRadarIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
