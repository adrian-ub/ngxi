import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsRedIcon],svg[file-icons-red-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m256 142.48l71.37-36.977L256 0l-71.37 105.503zM256 512l256-133.172l-71.37-105.503L256 369.52L71.37 273.325L0 378.828zm0-184.63l163.685-85.334l-71.37-105.503L256 184.63l-92.315-48.097l-71.37 105.503z"></svg:path>`,
})
export class FileIconsRedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
