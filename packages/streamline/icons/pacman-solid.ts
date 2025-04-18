import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePacmanSolidIcon],svg[streamline-pacman-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.375 7A6.625 6.625 0 0 1 12.64 3.523a.5.5 0 0 1-.163.689L7.953 7l4.524 2.788a.5.5 0 0 1 .163.689A6.625 6.625 0 0 1 .375 7M6 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePacmanSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
