import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumCircleChevRightIcon],svg[circum-circle-chev-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.85 11.65a.49.49 0 0 1 0 .7l-3 3a.495.495 0 0 1-.7-.7L12.79 12l-2.64-2.65a.495.495 0 0 1 .7-.7Z"></svg:path><svg:path fill="currentColor" d="M12 2.067A9.933 9.933 0 1 1 2.067 12A9.944 9.944 0 0 1 12 2.067m0 18.866A8.933 8.933 0 1 0 3.067 12A8.943 8.943 0 0 0 12 20.933"></svg:path>`,
})
export class CircumCircleChevRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
