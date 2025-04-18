import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7TodayIcon],svg[f7-today-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42 6a4 4 0 0 1 4 4v36a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4V10a4 4 0 0 1 4-4zm-2 4H16a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2m-2 10a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H18a2 2 0 0 1-2-2V22a2 2 0 0 1 2-2zm-12-8a2 2 0 1 1 0 4h-8a2 2 0 1 1 0-4z"></svg:path>`,
})
export class F7TodayIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
