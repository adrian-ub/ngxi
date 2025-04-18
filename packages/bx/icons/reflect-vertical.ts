import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxReflectVerticalIcon],svg[bx-reflect-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 18l6-6l-6-6zm12-6l6 6V6zm-4-9h2v3h-2zm0 5h2v3h-2zm0 5h2v3h-2zm0 5h2v3h-2z"></svg:path>`,
})
export class BxReflectVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
