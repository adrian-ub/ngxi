import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laRedoIcon],svg[la-redo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.219 5.281L17.78 6.72L24.063 13H11c-3.844 0-7 3.156-7 7v7h2v-7c0-2.754 2.246-5 5-5h13.063l-6.282 6.281l1.438 1.438l8-8l.687-.719l-.687-.719z"></svg:path>`,
})
export class LaRedoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
