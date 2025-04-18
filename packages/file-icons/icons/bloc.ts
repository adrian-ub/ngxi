import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsBlocIcon],svg[file-icons-bloc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.86 0L0 132.508v245.856L213.86 512L428 378.364V132.508zm156.022 155.36l-156.023 90.566L57.836 155.36L213.86 58.688zM49.888 173.82l153.993 89.387v183.731L49.888 350.711zm173.949 273.118v-183.73L377.83 173.82v176.89z"></svg:path>`,
})
export class FileIconsBlocIcon {
  readonly viewBox = input("0 0 428 512")
  readonly width = input("0.84em")
  readonly height = input("1em")
}
