import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinVscodeIcon],svg[catppuccin-vscode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#8aadf4" stroke-linecap="round" stroke-linejoin="round" d="M10.5 11L3 4.5h-.5l-1 1V6l9 8.5l4-2v-9l-4-2v13m0-13L5.3 6.41M3.53 8.08L1.5 10v.5l.98 1.1l.52-.1l2.17-1.88m1.91-1.66L10.5 5"></svg:path>`,
})
export class CatppuccinVscodeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
