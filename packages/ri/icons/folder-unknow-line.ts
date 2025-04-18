import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFolderUnknowLineIcon],svg[ri-folder-unknow-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM4 5v14h16V7h-8.414l-2-2zm7 11h2v2h-2zm-2.433-5.187A3.501 3.501 0 1 1 12 15h-1v-2h1a1.5 1.5 0 1 0-1.471-1.794z"></svg:path>`,
})
export class RiFolderUnknowLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
