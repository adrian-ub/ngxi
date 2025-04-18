import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFormatTextRotationDownVerticalIcon],svg[mdi-format-text-rotation-down-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 4h-1.5L9 15h2.1l.9-2.2h5l.9 2.2H20zm-2.62 7l1.87-5l1.87 5zM5 17.5l3-3H6V2H4v12.5H2zM22 20l-3-3v2H6.5v2H19v2z"></svg:path>`,
})
export class MdiFormatTextRotationDownVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
