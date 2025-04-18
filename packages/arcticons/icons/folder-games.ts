import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFolderGamesIcon],svg[arcticons-folder-games-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 11.5a3 3 0 0 1 3-3h8.718a4 4 0 0 1 2.325.745l4.914 3.51a4 4 0 0 0 2.325.745H40.5a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3h-33a3 3 0 0 1-3-3z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" d="M30.155 21.464H18.02a5.036 5.036 0 1 0 3.354 8.807h5.47a5.02 5.02 0 0 0 3.328 1.256a5.036 5.036 0 0 0 0-10.063z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.784 26.379h4.481m-2.236-2.167v4.403"></svg:path><svg:path fill="currentColor" d="M28.014 27.011a.65.65 0 1 1 0-1.3a.65.65 0 0 1 0 1.3m2.15 2.159a.65.65 0 1 1 0-1.3a.65.65 0 0 1 0 1.3m2.158-2.159a.65.65 0 1 1 0-1.3a.65.65 0 0 1 0 1.3m-2.158-2.149a.65.65 0 1 1 0-1.3a.65.65 0 0 1 0 1.3"></svg:path>`,
})
export class ArcticonsFolderGamesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
