import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinTauriIgnoreIcon],svg[catppuccin-tauri-ignore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#8087a2" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.73 4.02a4.64 4.64 0 1 1 5.55 6.56M7.5 10a.5.5 0 0 1-.5.5a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .5-.5a.5.5 0 0 1 .5.5"></svg:path><svg:path d="M11.26 12a4.64 4.64 0 1 1-5.63-6.55M9.5 6a.5.5 0 0 1-.5.5a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .5-.5a.5.5 0 0 1 .5.5"></svg:path></svg:g>`,
})
export class CatppuccinTauriIgnoreIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
