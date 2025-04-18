import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumCircleMinusIcon],svg[circum-circle-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 11.5a.5.5 0 0 1 0 1H9a.5.5 0 0 1 0-1Z"></svg:path><svg:path fill="currentColor" d="M12 21.934A9.933 9.933 0 1 1 21.932 12A9.945 9.945 0 0 1 12 21.934m0-18.866A8.933 8.933 0 1 0 20.932 12A8.944 8.944 0 0 0 12 3.068"></svg:path>`,
})
export class CircumCircleMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
