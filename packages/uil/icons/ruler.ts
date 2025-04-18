import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilRulerIcon],svg[uil-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.61 7.05L17 1.39a1 1 0 0 0-.71-.29a1 1 0 0 0-.7.29L1.39 15.54a1 1 0 0 0 0 1.41l5.66 5.66a1 1 0 0 0 .71.29a1 1 0 0 0 .7-.29l2.83-2.83l8.49-8.49l2.83-2.83a1 1 0 0 0 0-1.41m-3.54 2.12l-.71-.71a1 1 0 0 0-1.41 0a1 1 0 0 0 0 1.42l.71.71L16.24 12l-2.12-2.12a1 1 0 0 0-1.41 1.41l2.12 2.12l-1.42 1.42l-.7-.71a1 1 0 1 0-1.42 1.42l.71.7l-1.41 1.42l-2.13-2.12a1 1 0 0 0-1.41 0a1 1 0 0 0 0 1.41l2.12 2.12l-1.41 1.42l-4.25-4.25L16.24 3.51l4.25 4.25Z"></svg:path>`,
})
export class UilRulerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
