import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPlandayIcon],svg[arcticons-planday-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.5 34.367l12.315-14.49m13.406 9.7c6.83-8.769-4.973-20.004-13.406-9.7m13.406 9.7c-4.858 4.858-10.44 2.327-13.05-.737m13.272.46L43.5 13.634"></svg:path>`,
})
export class ArcticonsPlandayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
