import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feVrIcon],svg[fe-vr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 17l-2-2h-2l-2 2H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2zm7-3a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0zM4 14a1 1 0 0 1-2 0v-4a1 1 0 1 1 2 0z"></svg:path>`,
})
export class FeVrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
