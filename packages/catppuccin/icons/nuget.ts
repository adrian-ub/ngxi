import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinNugetIcon],svg[catppuccin-nuget-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#8aadf4" stroke-linecap="round" stroke-linejoin="round" d="M5.5 3.5h7a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-7c0-1.1.9-2 2-2M2 2.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m4.5 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4 5a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class CatppuccinNugetIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
