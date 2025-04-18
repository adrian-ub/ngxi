import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBorderOuterIcon],svg[tabler-border-outer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm8 2v.01M8 12v.01m4-.01v.01m4-.01v.01M12 16v.01"></svg:path>`,
})
export class TablerBorderOuterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
