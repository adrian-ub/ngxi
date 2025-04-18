import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsHorizontalSwitchLightIcon],svg[lets-icons-horizontal-switch-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 8l-.354-.354L3.293 8l.353.354L4 8Zm15.5 2a.5.5 0 0 0 1 0h-1ZM7.646 3.646l-4 4l.708.708l4-4l-.708-.708Zm-4 4.708l4 4l.708-.708l-4-4l-.708.708ZM4 8.5h14v-1H4v1Zm14 0a1.5 1.5 0 0 1 1.5 1.5h1A2.5 2.5 0 0 0 18 7.5v1Zm2 7.5l.354-.354l.353.354l-.353.354L20 16ZM5 16v.5v-.5Zm-2.5-2a.5.5 0 0 1 1 0h-1Zm13.854-2.354l4 4l-.708.708l-4-4l.708-.708Zm4 4.708l-4 4l-.708-.708l4-4l.708.708ZM20 16.5H5v-1h15v1Zm-15 0A2.5 2.5 0 0 1 2.5 14h1A1.5 1.5 0 0 0 5 15.5v1Z"></svg:path>`,
})
export class LetsIconsHorizontalSwitchLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
