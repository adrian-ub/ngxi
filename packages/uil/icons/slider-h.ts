import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilSliderHIcon],svg[uil-slider-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11h-3.184a2.982 2.982 0 0 0-5.632 0H3a1 1 0 0 0 0 2h9.184a2.982 2.982 0 0 0 5.632 0H21a1 1 0 0 0 0-2m-6 2a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class UilSliderHIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
