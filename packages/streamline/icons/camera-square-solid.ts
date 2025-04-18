import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCameraSquareSolidIcon],svg[streamline-camera-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 1.5A1.5 1.5 0 0 1 1.5 0h11A1.5 1.5 0 0 1 14 1.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 12.5zm10.824 4.732a1.093 1.093 0 0 0-1.092-1.093h-.547L8.093 3.5H5.907L4.815 5.139h-.547a1.093 1.093 0 0 0-1.092 1.093v2.731a1.093 1.093 0 0 0 1.092 1.093h5.464a1.093 1.093 0 0 0 1.092-1.093zM5.81 7.469a1.191 1.191 0 1 1 2.382 0a1.191 1.191 0 0 1-2.382 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCameraSquareSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
