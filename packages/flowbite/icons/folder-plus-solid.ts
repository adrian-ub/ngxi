import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteFolderPlusSolidIcon],svg[flowbite-folder-plus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 4a2 2 0 0 0-2 2v1h10.968l-1.9-2.28A2 2 0 0 0 10.532 4zM3 19V9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2m9-8.5a1 1 0 0 1 1 1V13h1.5a1 1 0 1 1 0 2H13v1.5a1 1 0 1 1-2 0V15H9.5a1 1 0 1 1 0-2H11v-1.5a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class FlowbiteFolderPlusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
