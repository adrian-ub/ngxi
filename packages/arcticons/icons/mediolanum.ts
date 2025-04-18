import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMediolanumIcon],svg[arcticons-mediolanum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 22.362a4.75 4.75 0 0 1 4.737-4.736a4.75 4.75 0 0 1 4.737 4.736v7.816M14.5 17.626v12.79m9.474-8.065c0-2.622 2.144-4.766 4.763-4.766S33.5 19.728 33.5 22.35v7.866"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.997 31.83C50.014 16.418 37.107.267 20.764 2.757C4.424 5.247-3.096 24.511 7.228 37.433c9.366 11.717 27.536 10.469 35.213-2.418"></svg:path>`,
})
export class ArcticonsMediolanumIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
