import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinFastlaneIcon],svg[catppuccin-fastlane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#7dc4e4" d="M4.5 13.5L3.05 8.42m-.06-3.86a2 2 0 1 0 .06 3.86L4.5 13.5"></svg:path><svg:path stroke="#ed8796" d="m2.5 6.5l3.88-2.82A2 2 0 1 1 10 2.3"></svg:path><svg:path stroke="#8aadf4" d="M14.3 8.33a2 2 0 1 0-2.43-3L8.01 2.5"></svg:path><svg:path stroke="#a6da95" d="M10.06 14.89a2 2 0 1 0 2-3.3L13.5 6.5"></svg:path><svg:path stroke="#c6a0f6" d="M11.5 13.5h-5a2 2 0 1 1-3.73-1"></svg:path><svg:path stroke="#c6a0f6" d="M12 13.5a.5.5 0 0 1-.5.5a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .5-.5a.5.5 0 0 1 .5.5"></svg:path><svg:path stroke="#7dc4e4" d="M5 13.5a.5.5 0 0 1-.5.5a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .5-.5a.5.5 0 0 1 .5.5"></svg:path><svg:path stroke="#ed8796" d="M3 6.5a.5.5 0 0 1-.5.5a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .5-.5a.5.5 0 0 1 .5.5"></svg:path><svg:path stroke="#8aadf4" d="M8.5 2.5A.5.5 0 0 1 8 3a.5.5 0 0 1-.5-.5A.5.5 0 0 1 8 2a.5.5 0 0 1 .5.5"></svg:path><svg:path stroke="#a6da95" d="M14 6.5a.5.5 0 0 1-.5.5a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .5-.5a.5.5 0 0 1 .5.5"></svg:path></svg:g>`,
})
export class CatppuccinFastlaneIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
