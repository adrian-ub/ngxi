import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsAttachIcon],svg[proicons-attach-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2.861 13.625l9.342-9.342a5.235 5.235 0 1 1 7.403 7.403L10.88 20.41a2.867 2.867 0 0 1-4.054-4.054l8.372-8.373"></svg:path>`,
})
export class ProiconsAttachIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
