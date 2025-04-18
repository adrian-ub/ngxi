import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinCppIcon],svg[catppuccin-cpp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#8aadf4" stroke-linecap="round" stroke-linejoin="round" d="M2.556 12.952a7.05 7.05 0 0 0 9.944 0l-1.79-1.783a4.513 4.513 0 0 1-6.364 0a4.47 4.47 0 0 1 0-6.338a4.513 4.513 0 0 1 6.364 0l.895-.891l.895-.892a7.05 7.05 0 0 0-9.944 0a6.98 6.98 0 0 0 0 9.904" clip-rule="evenodd"></svg:path><svg:path fill="none" stroke="#8aadf4" stroke-linecap="round" stroke-linejoin="round" d="M7.5 6v4M5.514 8h3.999m3.973-2v4M11.5 8h4"></svg:path>`,
})
export class CatppuccinCppIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
