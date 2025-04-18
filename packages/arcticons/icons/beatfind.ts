import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBeatfindIcon],svg[arcticons-beatfind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m22.188 26.192l-4.225 16.901a.315.315 0 0 0 .548.277l16.967-20.56a.63.63 0 0 0-.486-1.03H21.938c-3.51 0-4.74-1.755-3.437-4.061"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m25.648 21.78l4.225-16.901a.315.315 0 0 0-.548-.277L12.36 25.162a.63.63 0 0 0 .485 1.03H25.9c3.51 0 4.74 1.755 3.436 4.061"></svg:path>`,
})
export class ArcticonsBeatfindIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
