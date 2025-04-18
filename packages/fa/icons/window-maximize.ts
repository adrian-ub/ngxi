import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faWindowMaximizeIcon],svg[fa-window-maximize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 1280h1280V512H256zM1792 160v1216q0 66-47 113t-113 47H160q-66 0-113-47T0 1376V160Q0 94 47 47T160 0h1472q66 0 113 47t47 113"></svg:path>`,
})
export class FaWindowMaximizeIcon {
  readonly viewBox = input("0 0 1792 1536")
  readonly width = input("1.17em")
  readonly height = input("1em")
}
