import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumCircleChevDownIcon],svg[circum-circle-chev-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.35 13.85a.49.49 0 0 1-.7 0l-3-3a.495.495 0 0 1 .7-.7L12 12.79l2.65-2.64a.495.495 0 0 1 .7.7Z"></svg:path><svg:path fill="currentColor" d="M21.933 12A9.933 9.933 0 1 1 12 2.067A9.944 9.944 0 0 1 21.933 12M3.067 12A8.933 8.933 0 1 0 12 3.067A8.943 8.943 0 0 0 3.067 12"></svg:path>`,
})
export class CircumCircleChevDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
