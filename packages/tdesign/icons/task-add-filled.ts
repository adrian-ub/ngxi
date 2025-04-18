import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTaskAddFilledIcon],svg[tdesign-task-add-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 1H8v4h8z"></svg:path><svg:path fill="currentColor" d="M6 3H3v20h10.876A6.5 6.5 0 0 1 21 12.814V3h-3v4H6z"></svg:path><svg:path fill="currentColor" d="M24 20h-4v4h-2v-4h-4v-2h4v-4h2v4h4z"></svg:path>`,
})
export class TdesignTaskAddFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
