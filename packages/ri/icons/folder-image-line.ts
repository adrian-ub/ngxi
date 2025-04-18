import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFolderImageLineIcon],svg[ri-folder-image-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v14h16V7h-8.414l-2-2zm8.414 0H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM10 10.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m8 6.5l-4-6l-7 6z"></svg:path>`,
})
export class RiFolderImageLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
