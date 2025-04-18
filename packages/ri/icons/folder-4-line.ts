import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFolder4LineIcon],svg[ri-folder-4-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM8 19h12v-8H8zm-2 0v-9a1 1 0 0 1 1-1h13V7h-8.414l-2-2H4v14z"></svg:path>`,
})
export class RiFolder4LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
