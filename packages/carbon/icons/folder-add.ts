import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonFolderAddIcon],svg[carbon-folder-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 20h-2v4h-4v2h4v4h2v-4h4v-2h-4z"></svg:path><svg:path fill="currentColor" d="M28 8H16l-3.4-3.4c-.4-.4-.9-.6-1.4-.6H4c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h14v-2H4V6h7.2l3.4 3.4l.6.6H28v8h2v-8c0-1.1-.9-2-2-2"></svg:path>`,
})
export class CarbonFolderAddIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
