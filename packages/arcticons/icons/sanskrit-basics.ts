import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSanskritBasicsIcon],svg[arcticons-sanskrit-basics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.775 5.5h28.45m-7.107 0v11.382c-.24 8.264-9.96 9.96-17.079 0L33.961 42.5"></svg:path>`,
})
export class ArcticonsSanskritBasicsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
