import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignModuleIcon],svg[tdesign-module-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v16h7V4zm9 0v7h7V4zm7 9h-7v7h7z"></svg:path>`,
})
export class TdesignModuleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
