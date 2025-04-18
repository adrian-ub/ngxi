import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFolderImageFillIcon],svg[ri-folder-image-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM10 10.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m8 6.5l-4-6l-7 6z"></svg:path>`,
})
export class RiFolderImageFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
