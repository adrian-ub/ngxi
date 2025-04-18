import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinSonarCloudIcon],svg[catppuccin-sonar-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#f5a97f" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8 7.38a4 4 0 1 0 0 6.24"></svg:path><svg:path d="M6.5 10.5a4 4 0 1 0 5.49-3.71"></svg:path><svg:path d="M9.5 10.21A4 4 0 1 0 4 6.8"></svg:path></svg:g>`,
})
export class CatppuccinSonarCloudIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
