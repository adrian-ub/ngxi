import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEditRoadIcon],svg[hugeicons-edit-road-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.252 3v18m13-18v7.5M9.752 3v4m0 3v4m0 3v4m9.86-7.56l.695.692a1.497 1.497 0 0 1 0 2.121l-3.638 3.696a2 2 0 0 1-1.05.551l-2.254.488a.5.5 0 0 1-.597-.593l.48-2.235c.074-.397.267-.762.554-1.047l3.683-3.674a1.507 1.507 0 0 1 2.127 0" color="currentColor"></svg:path>`,
})
export class HugeiconsEditRoadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
