import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumCircleChevLeftIcon],svg[circum-circle-chev-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.15 12.35a.49.49 0 0 1 0-.7l3-3a.495.495 0 0 1 .7.7L11.21 12l2.64 2.65a.495.495 0 0 1-.7.7Z"></svg:path><svg:path fill="currentColor" d="M12 21.933A9.933 9.933 0 1 1 21.933 12A9.944 9.944 0 0 1 12 21.933m0-18.866A8.933 8.933 0 1 0 20.933 12A8.943 8.943 0 0 0 12 3.067"></svg:path>`,
})
export class CircumCircleChevLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
