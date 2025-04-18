import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFolderUnknowFillIcon],svg[ri-folder-unknow-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM11 16v2h2v-2zm-2.433-5.187l1.962.393A1.5 1.5 0 1 1 12 13h-1v2h1a3.5 3.5 0 1 0-3.433-4.187"></svg:path>`,
})
export class RiFolderUnknowFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
