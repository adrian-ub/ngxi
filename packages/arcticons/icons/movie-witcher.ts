import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMovieWitcherIcon],svg[arcticons-movie-witcher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.178 17.951V9.985h-3.68L14.839 33.13L9.18 9.985H5.5V33.55m7.34 2.976l1.999-3.396m6.526-.996l.929 5.881h2.582l5.659-23.145l5.659 23.145h2.581L42.5 14.45m-9.966-2.977l-1.999 3.397"></svg:path>`,
})
export class ArcticonsMovieWitcherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
