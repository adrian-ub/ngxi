import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiControlsVerticalIcon],svg[oui-controls-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 7.95a2.5 2.5 0 0 1 0-4.9V1.5a.5.5 0 1 1 1 0v1.55a2.5 2.5 0 0 1 0 4.9v6.55a.5.5 0 1 1-1 0zm-4 .1a2.5 2.5 0 0 1 0 4.9v1.55a.5.5 0 1 1-1 0v-1.55a2.5 2.5 0 0 1 0-4.9V1.5a.5.5 0 0 1 1 0zM5.5 12a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m5-8a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path>`,
})
export class OuiControlsVerticalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
