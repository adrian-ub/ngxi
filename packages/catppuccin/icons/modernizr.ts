import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinModernizrIcon],svg[catppuccin-modernizr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#f5bde6" stroke-linecap="round" stroke-linejoin="round" d="M1.5 14.5h12v-12h-4v4h-4v4h-4zm8 0v-8m-4 8v-4"></svg:path>`,
})
export class CatppuccinModernizrIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
