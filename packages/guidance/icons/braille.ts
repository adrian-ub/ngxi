import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceBrailleIcon],svg[guidance-braille-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M8.5 15A2.5 2.5 0 0 0 6 12.5h-.5v8H6A2.5 2.5 0 0 1 8.5 23m0-6V5.5H9A2.5 2.5 0 0 1 11.5 8v2.5m6 12.5v-8a2.5 2.5 0 0 0-2.5-2.5h-.55m.05 2.5v-2a2.5 2.5 0 0 0-2.5-2.5h-.5m0 0V15M1.5 1v2m6-2v2m6-2v2m3-2v2m6-2v2m-21 2v2m3-2v2m12-2v2m3-2v2m3-2v2"></svg:path>`,
})
export class GuidanceBrailleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
