import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsGalaxyIcon],svg[file-icons-galaxy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 166.565V54.935h381.034v111.63zm0 146.348V201.284h284.347v111.63zm130.088 144.151V345.435H512v111.63z"></svg:path>`,
})
export class FileIconsGalaxyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
