import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasIterationIcon],svg[pajamas-iteration-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.391 4.844a3.375 3.375 0 1 1 1.485 6.406H.75a.75.75 0 0 0 0 1.5h12.379l-.97.97a.75.75 0 1 0 1.061 1.06l2.25-2.25L16 12l-.53-.53l-2.25-2.25a.75.75 0 1 0-1.06 1.06l.97.97H8.392A4.874 4.874 0 1 0 .018 8.298a.75.75 0 1 0 1.495-.13A3.375 3.375 0 0 1 3.39 4.844Z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasIterationIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
