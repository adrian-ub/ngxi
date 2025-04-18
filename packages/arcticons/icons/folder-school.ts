import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFolderSchoolIcon],svg[arcticons-folder-school-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 11.5a3 3 0 0 1 3-3h8.718a4 4 0 0 1 2.325.745l4.914 3.51a4 4 0 0 0 2.325.745H40.5a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3h-33a3 3 0 0 1-3-3z"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m33 24.251l-9-3.518l-9 3.518l9 3.519z"></svg:path><svg:path d="M18.183 25.496v2.816c0 .905 2.604 1.64 5.817 1.64s5.817-.735 5.817-1.64v-2.816"></svg:path><svg:path d="M25.786 24.251c2.49-.175 4.16-.033 5.067.84s.262 6.276.262 6.276"></svg:path></svg:g>`,
})
export class ArcticonsFolderSchoolIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
