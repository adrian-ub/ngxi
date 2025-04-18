import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFileCloudIcon],svg[mdi-file-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m9.68 13a3.758 3.758 0 0 0-7-1A3.03 3.03 0 0 0 6 17a3 3 0 0 0 3 3h6.5a2.5 2.5 0 0 0 2.5-2.5c0-1.32-1.03-2.39-2.32-2.5"></svg:path>`,
})
export class MdiFileCloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
