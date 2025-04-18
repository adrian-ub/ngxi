import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTeldaIcon],svg[arcticons-telda-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 19.1c0 5.412-4.388 9.8-9.8 9.8c-6.018 0-7.842-3.164-9.7-4.9s-3.682-4.9-9.7-4.9c-5.412 0-9.8 4.388-9.8 9.8"></svg:path>`,
})
export class ArcticonsTeldaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
