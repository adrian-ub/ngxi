import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixFolderUpIcon],svg[ix-folder-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M220.75 85.333L274.71 128h194.625v298.666H42.667V85.333zM205.917 128H85.334v256l149.421-.001l.453-109.057l-48.918 48.918l-30.167-30.167l100.418-100.522l100.415 100.522l-30.166 30.167l-48.916-48.915l-.452 109.054h149.245V170.667H259.875z"></svg:path>`,
})
export class IxFolderUpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
