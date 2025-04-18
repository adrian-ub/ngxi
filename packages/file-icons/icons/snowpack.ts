import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsSnowpackIcon],svg[file-icons-snowpack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M486.057 460.9H26.015C6.4 460.9-7.11 439.126 4.013 420.897l230.483-358.07c8.455-13.595 30.804-17.553 43.072 0l230.398 358.397c11.126 16.664-2.255 39.676-21.91 39.676m-331.03-178.016l38.003 38.003l63.006-64.005h86.008l-86.008-132.265z"></svg:path>`,
})
export class FileIconsSnowpackIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
