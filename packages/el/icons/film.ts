import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elFilmIcon],svg[el-film-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M70.825 0v1200h1058.35V0zm53.98 72.07H254.81v98.877H124.805zm820.312 0h130.005v98.877H945.117zm-634.424 7.325h578.613v523.682H310.693zM124.805 293.628H254.81v98.877H124.805zm820.385 0h130.005v98.877H945.19zM124.805 515.186H254.81v98.877H124.805zm820.385 0h130.005v98.877H945.19zM310.693 639.697h578.613v523.682H310.693zm-185.888 97.046H254.81v98.877H124.805zm820.385 0h130.005v98.877H945.19zM124.805 958.301H254.81v98.877H124.805zm820.385 0h130.005v98.877H945.19z"></svg:path>`,
})
export class ElFilmIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
