import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixUndoIcon],svg[ix-undo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m196.508 272.915l-30.17 30.17L55.253 192L166.338 80.915l30.17 30.17l-59.613 59.624h172.758c75.694 0 137.4 60.95 138.627 136.356l.018 2.29c0 76.458-62.186 138.645-138.645 138.645h-74.88v-42.667h74.88c52.907 0 95.979-43.072 95.979-95.978c0-52.907-43.072-95.98-95.979-95.98H136.98z"></svg:path>`,
})
export class IxUndoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
