import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFolder2LineIcon],svg[ri-folder-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM20 11H4v8h16zm0-2V7h-8.414l-2-2H4v4z"></svg:path>`,
})
export class RiFolder2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
