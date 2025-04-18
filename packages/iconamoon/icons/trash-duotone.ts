import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonTrashDuotoneIcon],svg[iconamoon-trash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M8 21h8a2 2 0 0 0 2-2V7H6v12a2 2 0 0 0 2 2" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 11v6m-4-6v6M6 7v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7M4 7h16M7 7l2-4h6l2 4"></svg:path></svg:g>`,
})
export class IconamoonTrashDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
