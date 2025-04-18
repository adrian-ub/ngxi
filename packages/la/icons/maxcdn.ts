import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laMaxcdnIcon],svg[la-maxcdn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 6l2 5l-3 15h5l3-15h4l-3 15h5l3-15h4l-3 15h5l2.75-13.742C30.395 9.02 27.922 6 24.617 6z"></svg:path>`,
})
export class LaMaxcdnIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
