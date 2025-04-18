import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonSmilingFaceThinIcon],svg[iconamoon-smiling-face-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M15.465 14A4 4 0 0 1 12 16a4 4 0 0 1-3.465-2M14 10l1-1l1 1m-6 0L9 9l-1 1"></svg:path></svg:g>`,
})
export class IconamoonSmilingFaceThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
