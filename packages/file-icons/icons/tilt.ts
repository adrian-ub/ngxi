import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsTiltIcon],svg[file-icons-tilt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M157.174 14.948v127.908c0 8.084-6.549 14.633-14.633 14.633H14.633C6.549 157.49 0 150.94 0 142.856v-53.03a14.65 14.65 0 0 1 7.01-12.484L129.673 2.464c12.8-6.144 27.5-.359 27.5 12.484M470 141.628V14.949C470 6.89 463.451.34 455.367.34H202.595c-8.084 0-14.633 6.549-14.633 14.633v482.393c0 8.084 6.549 14.633 14.633 14.633h141.287c8.084 0 14.633-6.549 14.633-14.633V170.894c0-8.084 6.549-14.633 14.633-14.633h82.22c8.083 0 14.632-6.549 14.632-14.632"></svg:path>`,
})
export class FileIconsTiltIcon {
  readonly viewBox = input("0 0 470 512")
  readonly width = input("0.92em")
  readonly height = input("1em")
}
