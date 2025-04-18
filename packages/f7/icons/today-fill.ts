import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7TodayFillIcon],svg[f7-today-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 6h28a4 4 0 0 1 4 4v36a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4V10a4 4 0 0 1 4-4m4 14a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V22a2 2 0 0 0-2-2zm0-8a2 2 0 1 0 0 4h8a2 2 0 1 0 0-4z"></svg:path>`,
})
export class F7TodayFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
