import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBuilding3FilledIcon],svg[tdesign-building-3-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2H8v3H5v4h14V5h-3zM2 11h20v11h-6v-6H8v6H2z"></svg:path><svg:path fill="currentColor" d="M10 22v-4h4v4z"></svg:path>`,
})
export class TdesignBuilding3FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
