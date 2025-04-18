import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirCableTagSolidIcon],svg[iconoir-cable-tag-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 2.25A6.75 6.75 0 0 0 1.25 9v6A6.75 6.75 0 0 0 8 21.75h8A6.75 6.75 0 0 0 22.75 15V9A6.75 6.75 0 0 0 16 2.25zm4.359 6.039a.75.75 0 0 0-1.385-.577l-1.666 4A.75.75 0 0 0 10 12.75h2.875l-1.234 2.962a.75.75 0 0 0 1.385.577l1.666-4A.75.75 0 0 0 14 11.25h-2.875z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirCableTagSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
