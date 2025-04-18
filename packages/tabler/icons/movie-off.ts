import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMovieOffIcon],svg[tabler-movie-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4h10a2 2 0 0 1 2 2v10m-.592 3.42c-.362.359-.859.58-1.408.58H6a2 2 0 0 1-2-2V6c0-.539.213-1.028.56-1.388M8 8v12m8-16v8m0 4v4M4 8h4m-4 8h4m-4-4h8m4 0h4m-4-4h4M3 3l18 18"></svg:path>`,
})
export class TablerMovieOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
