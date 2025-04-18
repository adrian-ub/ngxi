import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignToolsIcon],svg[tdesign-tools-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.534 1.866a8.502 8.502 0 0 1 11.487 9.793l5.154 5.153l-1.415 1.414l-5.987-5.987l.178-.576a6.5 6.5 0 0 0-1.615-6.518A6.5 6.5 0 0 0 8.34 3.392l4.228 4.228l-4.95 4.95L3.39 8.34a6.5 6.5 0 0 0 1.754 5.996a6.5 6.5 0 0 0 6.518 1.615l.575-.178l5.988 5.988l-1.414 1.414l-5.154-5.153A8.502 8.502 0 0 1 1.864 6.535l.254-.624l1.672.002l3.828 3.828L9.74 7.62L5.912 3.792L5.91 2.12zm9.216 12.471l4.95 4.95l-1.414 1.414l-4.95-4.95z"></svg:path>`,
})
export class TdesignToolsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
