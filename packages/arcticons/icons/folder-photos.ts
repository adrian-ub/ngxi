import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFolderPhotosIcon],svg[arcticons-folder-photos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 11.5a3 3 0 0 1 3-3h8.718a4 4 0 0 1 2.325.745l4.914 3.51a4 4 0 0 0 2.325.745H40.5a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3h-33a3 3 0 0 1-3-3z"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M22.483 33.558H12.315a1 1 0 0 1-.761-1.648l4.322-5.075a2 2 0 0 1 3.046 0l4.322 5.075a1 1 0 0 1-.76 1.648"></svg:path><svg:path d="m20.694 28.916l5.078-5.963a2 2 0 0 1 3.045 0l7.63 8.957a1 1 0 0 1-.762 1.648H22.483"></svg:path><svg:circle cx="15.12" cy="21.721" r="2.279"></svg:circle></svg:g>`,
})
export class ArcticonsFolderPhotosIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
