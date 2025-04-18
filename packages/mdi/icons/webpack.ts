import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiWebpackIcon],svg[mdi-webpack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.45 17.39l-8.09 4.58V18.4l5.04-2.77zm.55-.5V7.31L18.04 9v6.18zm-17.45.5l8.09 4.57V18.4L6.6 15.63zm-.55-.5V7.31L5.96 9v6.18zm.35-10.2L11.64 2v3.45L6.33 8.37l-.05.02zm17.3 0L12.36 2v3.45l5.31 2.93l.04.02zm-9.01 10.9l-4.97-2.74V9.44l4.97 2.87zm.72 0l4.97-2.73V9.44l-4.97 2.87zM7 8.81l5-2.75l5 2.75l-5 2.88z"></svg:path>`,
})
export class MdiWebpackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
