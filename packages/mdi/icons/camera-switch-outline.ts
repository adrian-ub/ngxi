import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCameraSwitchOutlineIcon],svg[mdi-camera-switch-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4h-3.2L15 2H9L7.2 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M9.9 4h4.2l1.8 2H20v12H4V6h4.1m6.9 5H9V8.5L5.5 12L9 15.5V13h6v2.5l3.5-3.5L15 8.5z"></svg:path>`,
})
export class MdiCameraSwitchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
