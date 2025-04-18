import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[wpfMaestroIcon],svg[wpf-maestro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5.188A7.81 7.81 0 0 0 .187 13A7.812 7.812 0 0 0 13 19a7.812 7.812 0 1 0 0-12a7.77 7.77 0 0 0-5-1.812m10 2A5.82 5.82 0 0 1 23.813 13A5.82 5.82 0 0 1 18 18.813c-1.378 0-2.628-.51-3.625-1.313a7.8 7.8 0 0 0 1.438-4.5a7.8 7.8 0 0 0-1.438-4.5c.997-.804 2.247-1.313 3.625-1.313z"></svg:path>`,
})
export class WpfMaestroIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
