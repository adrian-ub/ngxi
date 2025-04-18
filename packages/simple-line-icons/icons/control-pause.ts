import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleLineIconsControlPauseIcon],svg[simple-line-icons-control-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416.272 0H192.064c-17.664 0-32 14.32-32 32v960c0 17.664 14.336 32 32 32h224.208c17.68 0 32-14.336 32-32V32c0-17.68-14.32-32-32-32m-32 960H224.064V64h160.208zM831.937 0H608.881c-17.68 0-32 14.32-32 32v960c0 17.664 14.32 32 32 32h223.056c17.68 0 32-14.336 32-32V32c0-17.68-14.304-32-32-32m-32 960H640.881V64h159.056z"></svg:path>`,
})
export class SimpleLineIconsControlPauseIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
