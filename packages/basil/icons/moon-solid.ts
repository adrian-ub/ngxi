import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilMoonSolidIcon],svg[basil-moon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3.5a8.5 8.5 0 1 0 8.46 9.32a.5.5 0 0 0-.812-.435a5 5 0 1 1-6.137-7.893a.5.5 0 0 0-.225-.895A8.6 8.6 0 0 0 12 3.5"></svg:path>`,
})
export class BasilMoonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
