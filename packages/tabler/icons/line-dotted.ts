import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLineDottedIcon],svg[tabler-line-dotted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12v.01M8 12v.01m4-.01v.01m4-.01v.01m4-.01v.01"></svg:path>`,
})
export class TablerLineDottedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
