import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixFolderDownIcon],svg[ix-folder-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M220.75 85.333L274.71 128h194.625v298.666H42.667V85.333zm56.583 193.82l48.916-48.905l30.17 30.17L256 360.836L155.582 260.418l30.17-30.17l48.914 48.903V150.732L205.916 128H85.335v256h341.333V170.666H277.333z"></svg:path>`,
})
export class IxFolderDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
