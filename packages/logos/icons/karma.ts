import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosKarmaIcon],svg[logos-karma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#429F87" d="m154.565 138.602l39.246 58.547h62.043l-70.31-103.883zM29.492 169.994l28.736-27.07l45.942 54.225L74.678 88.375l-24.9 40.962z"></svg:path><svg:path fill="#56C5A8" d="m29.492 169.994l45.186-81.62l-28.728 27.084L0 61.23zM249.938.603h-62.043l-37.999 56.144V.603H92.985v58.229l30.344 111.834l7.071 26.483h19.496v-49.138z"></svg:path>`,
})
export class LogosKarmaIcon {
  readonly viewBox = input("0 0 256 198")
  readonly width = input("1.3em")
  readonly height = input("1em")
}
