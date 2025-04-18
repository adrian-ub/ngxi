import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBunpoIcon],svg[arcticons-bunpo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.621 22.944c3.746 4.504 2.494 11.49-1.494 15.49c-7.492 6.986-14.984 4.745-13.49-4.999q2.252-16.477 14.984-26.97c4.493-2.987 7.492 1.506 3 5.999c-11.239 11.238-20.225 11.238-31.463 1.494"></svg:path>`,
})
export class ArcticonsBunpoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
