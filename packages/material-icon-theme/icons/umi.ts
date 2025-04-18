import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeUmiIcon],svg[material-icon-theme-umi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#455a64" d="M1 8a7 7 0 0 0 4 6.316V15h6v-.684A7 7 0 0 0 15 8z"></svg:path><svg:path fill="#f5f5f5" d="M8 3a5 5 0 0 0-5 5h10a5 5 0 0 0-5-5"></svg:path><svg:path fill="#2196f3" d="M2.092 9A6 6 0 0 0 8 14a6 6 0 0 0 5.908-5z"></svg:path><svg:g fill="#455a64"><svg:g stroke-width="0"><svg:circle cx="5.5" cy="6.5" r=".5"></svg:circle><svg:circle cx="10.5" cy="6.5" r=".5"></svg:circle><svg:circle cx="6.5" cy="5.5" r=".5"></svg:circle></svg:g><svg:path d="M8 2a6 6 0 0 0-6 6h1a5 5 0 0 1 5-5a5 5 0 0 1 5 5h1a6 6 0 0 0-6-6"></svg:path></svg:g>`,
})
export class MaterialIconThemeUmiIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
