import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFolderGoogleDriveIcon],svg[mdi-folder-google-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.75 9h2.39L19 14h-2.95L13.5 9.46M18.3 17h-5.55l1.4-2.5h5.12l.26.46M11.5 17l-1.1-2.14l2.84-4.96l1.5 2.66L12.25 17M20 6h-8l-2-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiFolderGoogleDriveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
