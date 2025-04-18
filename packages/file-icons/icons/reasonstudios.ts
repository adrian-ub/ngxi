import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsReasonstudiosIcon],svg[file-icons-reasonstudios-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M430.546 109.382L253.673 6.982c-16.291-9.31-34.91-9.31-51.2 0L25.6 109.382C9.31 118.69 0 134.982 0 153.6v204.8c0 18.618 9.31 34.91 25.6 44.218l176.873 102.4c16.29 9.31 34.909 9.31 51.2 0l176.872-102.4C446.836 393.31 456 377.018 456 358.4V153.6c0-18.618-9.164-34.91-25.454-44.218M228.073 256v169.89L81.455 339.783V169.89l146.618-83.782l146.618 83.782z"></svg:path>`,
})
export class FileIconsReasonstudiosIcon {
  readonly viewBox = input("0 0 456 512")
  readonly width = input("0.9em")
  readonly height = input("1em")
}
