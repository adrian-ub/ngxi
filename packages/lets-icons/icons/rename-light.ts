import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsRenameLightIcon],svg[lets-icons-rename-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M9 5h5m0 0h5m-5 0v14m-5 0h5m0 0h5M11 9H4a2 2 0 0 0-2 2v4h9m6 0h3a2 2 0 0 0 2-2V9h-5"></svg:path>`,
})
export class LetsIconsRenameLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
