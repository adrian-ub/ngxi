import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsFolderOpenIcon],svg[majesticons-folder-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M21 10.17c1.165.412 2 1.524 2 2.83v5a3 3 0 0 1-3 3H6v-8a3 3 0 0 1 3-3h12v.17zM20.83 8A3.001 3.001 0 0 0 18 6h-5.93a1 1 0 0 1-.832-.445l-.812-1.22A3 3 0 0 0 7.93 3H5a3 3 0 0 0-3 3v12c0 .493.14 1.211.588 1.834A2.73 2.73 0 0 0 4 20.854V13a5 5 0 0 1 5-5h11.83z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsFolderOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
