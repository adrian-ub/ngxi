import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[topcoatListviewIcon],svg[topcoat-listview-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M39.5 10.5v-1c0-1.47-.48-2-2-2h-34c-1.53 0-2 .52-2 2v1c0 1.55.52 2 2 2h34c1.5 0 2-.48 2-2m0 11v-1c0-1.47-.48-2-2-2h-34c-1.53 0-2 .52-2 2v1c0 1.55.52 2 2 2h34c1.5 0 2-.48 2-2m0 11v-1c0-1.471-.48-2-2-2h-34c-1.53 0-2 .52-2 2v1c0 1.55.52 2 2 2h34c1.5 0 2-.48 2-2"></svg:path>`,
})
export class TopcoatListviewIcon {
  readonly viewBox = input("0 0 42 42")
  readonly width = input("1em")
  readonly height = input("1em")
}
