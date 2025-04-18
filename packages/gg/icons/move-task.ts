import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggMoveTaskIcon],svg[gg-move-task-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.964 7h-8v2h8zM6 8.829v6.342L9.964 12zM18.964 11h-8v2h8zm-8 4h8v2h-8z"></svg:path>`,
})
export class GgMoveTaskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
