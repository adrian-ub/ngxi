import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsTrashIcon],svg[humbleicons-trash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 6l.934 13.071A1 1 0 0 0 7.93 20h8.138a1 1 0 0 0 .997-.929L18 6m-6 5v4m8-9H4m4.5 0l.544-1.632A2 2 0 0 1 10.941 3h2.117a2 2 0 0 1 1.898 1.368L15.5 6"></svg:path>`,
})
export class HumbleiconsTrashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
