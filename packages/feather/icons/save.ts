import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherSaveIcon],svg[feather-save-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2"></svg:path><svg:path d="M17 21v-8H7v8M7 3v5h8"></svg:path></svg:g>`,
})
export class FeatherSaveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
