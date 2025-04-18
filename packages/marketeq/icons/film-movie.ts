import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqFilmMovieIcon],svg[marketeq-film-movie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 35.417v8.333h12.5v-8.333zm-12.5 0v8.333H25v-8.333zM6.25 43.75h37.5zM37.5 14.583V6.25H25v8.333zm-12.5 0V6.25H12.5v8.333zM6.25 6.25h37.5zM27.083 25l-4.166-3.125v6.25z"></svg:path><svg:path stroke="#306CFE" d="M43.75 33.333V16.667a2.084 2.084 0 0 0-2.083-2.084H8.333c-1.15 0-2.083.933-2.083 2.084v16.666c0 1.15.933 2.084 2.083 2.084h33.334c1.15 0 2.083-.933 2.083-2.084"></svg:path></svg:g>`,
})
export class MarketeqFilmMovieIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
