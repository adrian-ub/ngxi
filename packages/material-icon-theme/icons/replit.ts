import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeReplitIcon],svg[material-icon-theme-replit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff6d00" d="M8 4h8v8H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m8 8h8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-8zm-8 8h8v8H8a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2"></svg:path>`,
})
export class MaterialIconThemeReplitIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
