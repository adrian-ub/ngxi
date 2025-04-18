import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsTrashIcon],svg[akar-icons-trash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M3 4l.813 8.132c.125 1.243.346 2.475.662 3.684l.667 2.55a4 4 0 0 0 2.66 2.801l.567.18a12 12 0 0 0 7.262 0l.567-.18a4 4 0 0 0 2.66-2.8l.667-2.55c.316-1.21.538-2.442.662-3.685L21 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></svg:path><svg:ellipse cx="12" cy="4" rx="9" ry="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></svg:ellipse></svg:g>`,
})
export class AkarIconsTrashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
