import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTasksIcon],svg[arcticons-tasks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m36.13 7.85l6.66 4.87l-16.37 22.39l-4.87 6.67l-6.66-4.87l-11.1-8.12l4.87-6.66l11.1 8.12Z"></svg:path>`,
})
export class ArcticonsTasksIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
