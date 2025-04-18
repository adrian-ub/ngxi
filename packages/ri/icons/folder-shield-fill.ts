import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFolderShieldFillIcon],svg[ri-folder-shield-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM8 9v4.904c0 .892.446 1.724 1.187 2.219L12 17.998l2.813-1.875A2.67 2.67 0 0 0 16 13.904V9zm2 4.904V11h4v2.904a.67.67 0 0 1-.297.555L12 15.594l-1.703-1.135a.67.67 0 0 1-.297-.555"></svg:path>`,
})
export class RiFolderShieldFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
