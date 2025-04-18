import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineEmailDelectIcon],svg[icon-park-outline-email-delect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 24V9H4v30h20"></svg:path><svg:path d="m4 9l20 15L44 9M32 31h10l-2 10h-6zm4 0l2-4"></svg:path></svg:g>`,
})
export class IconParkOutlineEmailDelectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
