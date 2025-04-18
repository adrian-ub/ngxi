import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSymphonyIcon],svg[arcticons-symphony-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 21.697v4.74m-7.4-13.374v21.678M27.7 5.664v32.092m-7.4-27.512v32.092M12.9 14.41v19.044M5.5 19.65v8.928"></svg:path>`,
})
export class ArcticonsSymphonyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
