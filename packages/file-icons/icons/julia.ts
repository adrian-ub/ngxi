import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsJuliaIcon],svg[file-icons-julia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.185 235.303c-76.74-44.241-76.74-155.445 0-199.686S371.37 46.977 371.37 135.46s-96.445 144.084-173.185 99.843M230.74 376.54c0-88.483-96.445-144.085-173.185-99.843s-76.74 155.445 0 199.686s173.185-11.36 173.185-99.843m281.26 0c0-88.483-96.445-144.085-173.185-99.843s-76.74 155.445 0 199.686S512 465.023 512 376.54"></svg:path>`,
})
export class FileIconsJuliaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
