import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBorderRadiusIcon],svg[tabler-border-radius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12V8a4 4 0 0 1 4-4h4m4 0v.01M20 4v.01M20 8v.01M20 12v.01M4 16v.01M20 16v.01M4 20v.01M8 20v.01m4-.01v.01m4-.01v.01m4-.01v.01"></svg:path>`,
})
export class TablerBorderRadiusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
