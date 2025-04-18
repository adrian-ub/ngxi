import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFolderShieldLineIcon],svg[ri-folder-shield-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM4 5v14h16V7h-8.414l-2-2zm4 4h8v4.904c0 .892-.446 1.724-1.187 2.219L12 17.998l-2.813-1.875A2.67 2.67 0 0 1 8 13.904zm2 4.904c0 .223.111.431.297.555L12 15.594l1.703-1.135a.67.67 0 0 0 .297-.555V11h-4z"></svg:path>`,
})
export class RiFolderShieldLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
