import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCheckCorrectIcon],svg[icon-park-check-correct-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 20V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9C6 7.34315 7.34315 6 9 6H30"></svg:path><svg:path d="M16 20L26 28L41 7"></svg:path></svg:g>`,
})
export class IconParkCheckCorrectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
