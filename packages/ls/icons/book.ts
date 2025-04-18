import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsBookIcon],svg[ls-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 601V169s54-81 196-81c143 0 188 77 188 77s45-77 188-77c142 0 196 81 196 81v432s-95-70-198-70c-102 0-186 75-186 75s-84-75-186-75C95 531 0 601 0 601m65-415v314s41-31 139-31c97 0 148 58 148 58V200s-69-50-156-50c-86 0-131 36-131 36m351 14v327s48-58 148-58c99 0 139 31 139 31V186s-45-36-131-36c-87 0-156 50-156 50"></svg:path>`,
})
export class LsBookIcon {
  readonly viewBox = input("0 0 768 614")
  readonly width = input("1.26em")
  readonly height = input("1em")
}
