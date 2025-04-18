import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicopacksIcon],svg[arcticons-micopacks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m38.941 6.594l2.96 2.96a2.047 2.047 0 0 1 0 2.893L23.524 30.824l-5.853-5.853L36.048 6.594a2.047 2.047 0 0 1 2.893 0M18.162 29.003c-2.47-1.84-5.983-1.54-8.138.66c-2.803 2.86-.226 5.834-3.857 7.83c-.786.431-.907 1.517-.205 2.075c4.75 3.779 8.79 2.983 12.914-1.14a6.232 6.232 0 0 0-.714-9.425"></svg:path>`,
})
export class ArcticonsMicopacksIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
