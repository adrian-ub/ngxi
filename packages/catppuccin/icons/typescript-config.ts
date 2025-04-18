import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinTypescriptConfigIcon],svg[catppuccin-typescript-config-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#8087a2" d="M11.5 13.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1.75-4l1.75 3l-1.75 3h-3.5L8 12.5l1.75-3z"></svg:path><svg:path stroke="#8aadf4" d="M6.5 11.5h-4a2 2 0 0 1-2-2v-7c0-1.1.9-2 2-2h7.97c1.1 0 2 .92 2 2V7"></svg:path><svg:path stroke="#8aadf4" d="M10.5 4.5C10.17 4.17 9.67 4 9 4c-1 0-1.5.5-1.5 1S8 6 9 6s1.5.5 1.5 1S10 8 9 8c-.67 0-1.17-.17-1.5-.5M4 4v4M2.5 4h3"></svg:path></svg:g>`,
})
export class CatppuccinTypescriptConfigIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
