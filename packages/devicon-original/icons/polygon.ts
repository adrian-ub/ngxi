import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconOriginalPolygonIcon],svg[devicon-original-polygon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M64 0c35.348 0 64 28.652 64 64s-28.652 64-64 64S0 99.348 0 64S28.652 0 64 0zm0 0"></svg:path><svg:path fill="#7950DD" d="M85.898 49.242a5.76 5.76 0 0 0-5.418 0l-12.214 7.223l-8.532 4.742l-12.214 7.227a5.76 5.76 0 0 1-5.418 0l-9.707-5.649a5.423 5.423 0 0 1-2.711-4.52V46.989a4.972 4.972 0 0 1 2.71-4.52l9.708-5.417a5.738 5.738 0 0 1 5.418 0l9.707 5.418a5.423 5.423 0 0 1 2.71 4.52v7.218l8.329-4.965v-6.996a4.963 4.963 0 0 0-2.664-4.52l-17.86-10.382a5.738 5.738 0 0 0-5.418 0L24.266 37.727a4.608 4.608 0 0 0-2.934 4.52v20.991a4.967 4.967 0 0 0 2.711 4.496l18.059 10.407a5.76 5.76 0 0 0 5.418 0l12.214-7l8.352-4.965l12.172-6.977a5.76 5.76 0 0 1 5.418 0l9.707 5.418a5.419 5.419 0 0 1 2.707 4.52v11.062a4.967 4.967 0 0 1-2.707 4.516l-9.707 5.64a5.738 5.738 0 0 1-5.418 0l-9.707-5.418a5.416 5.416 0 0 1-2.711-4.515v-7.25l-8.106 4.738v7.219a4.969 4.969 0 0 0 2.707 4.52L80.5 100.03a5.746 5.746 0 0 0 5.422 0l18.058-10.383a5.42 5.42 0 0 0 2.688-4.511v-21a4.964 4.964 0 0 0-2.711-4.516zm0 0"></svg:path>`,
})
export class DeviconOriginalPolygonIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
