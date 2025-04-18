import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonConfusedFaceThinIcon],svg[iconamoon-confused-face-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:circle cx="12" cy="12" r="9" stroke-linecap="round"></svg:circle><svg:path stroke-width="1.5" d="M9.01 9.5v.01H9V9.5zm6 0v.01H15V9.5z"></svg:path><svg:path stroke-linecap="round" d="M13 14c-1.48 0-2.773.804-3.465 2"></svg:path></svg:g>`,
})
export class IconamoonConfusedFaceThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
