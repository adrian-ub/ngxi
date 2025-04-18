import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHierarchy10SolidIcon],svg[streamline-hierarchy-10-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 1.25C1.25.56 1.81 0 2.5 0h2c.69 0 1.25.56 1.25 1.25v2c0 .69-.56 1.25-1.25 1.25h-.25V6a3.75 3.75 0 0 1 2.25-.75h2V5c0-.69.56-1.25 1.25-1.25h2c.69 0 1.25.56 1.25 1.25v2c0 .69-.56 1.25-1.25 1.25h-2C9.06 8.25 8.5 7.69 8.5 7v-.25h-2A2.25 2.25 0 0 0 4.25 9v.5h.25c.69 0 1.25.56 1.25 1.25v2c0 .69-.56 1.25-1.25 1.25h-2c-.69 0-1.25-.56-1.25-1.25v-2c0-.69.56-1.25 1.25-1.25h.25v-5H2.5c-.69 0-1.25-.56-1.25-1.25z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHierarchy10SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
