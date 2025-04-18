import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiFolderHeartIcon],svg[mynaui-folder-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3 6a2 2 0 0 1 2-2h1.745a2 2 0 0 1 1.322.5l2.272 2a2 2 0 0 0 1.322.5H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></svg:path><svg:path d="M8.62 12.024c0 1.972 3.38 4.226 3.38 4.226s3.38-2.254 3.38-4.226c0-1.88-2.55-2.454-3.38-.798c-.814-1.625-3.38-1.053-3.38.798"></svg:path></svg:g>`,
})
export class MynauiFolderHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
