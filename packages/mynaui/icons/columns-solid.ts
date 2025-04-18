import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiColumnsSolidIcon],svg[mynaui-columns-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 2.25A1.75 1.75 0 0 0 12.75 4v16c0 .966.784 1.75 1.75 1.75h3A1.75 1.75 0 0 0 19.25 20V4a1.75 1.75 0 0 0-1.75-1.75zm-8 0A1.75 1.75 0 0 0 4.75 4v16c0 .966.784 1.75 1.75 1.75h3A1.75 1.75 0 0 0 11.25 20V4A1.75 1.75 0 0 0 9.5 2.25z"></svg:path>`,
})
export class MynauiColumnsSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
