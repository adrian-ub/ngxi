import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMradioIcon],svg[arcticons-mradio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.8 25.888c4.446-1.169 7.73-5.204 7.73-10.018c0-5.727-4.643-10.37-10.37-10.37H9.038v37h29.925zm7.673-11.136H9.037m23.533 9.252H9.037m24.265 9.244H9.037"></svg:path>`,
})
export class ArcticonsMradioIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
