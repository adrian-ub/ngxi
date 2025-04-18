import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimUserArrowsIcon],svg[uim-user-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 16.5A3.5 3.5 0 1 1 9.5 13A3.504 3.504 0 0 1 6 16.5" opacity=".25"></svg:path><svg:path fill="currentColor" d="M8.64 15.272a3.452 3.452 0 0 1-5.28 0A4.99 4.99 0 0 0 1 19.5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1a4.99 4.99 0 0 0-2.36-4.228M18 16.5a3.5 3.5 0 1 1 3.5-3.5a3.504 3.504 0 0 1-3.5 3.5" opacity=".5"></svg:path><svg:path fill="currentColor" d="M20.64 15.272a3.452 3.452 0 0 1-5.28 0A4.99 4.99 0 0 0 13 19.5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1a4.99 4.99 0 0 0-2.36-4.228" opacity=".7"></svg:path><svg:path fill="currentColor" d="m17.207 5.793l-2-2a1 1 0 0 0-1.414 1.414l.293.293H9.914l.293-.293a1 1 0 0 0-1.414-1.414l-2 2a1 1 0 0 0 0 1.414l2 2a1 1 0 0 0 1.414-1.414L9.914 7.5h4.172l-.293.293a1 1 0 1 0 1.414 1.414l2-2a1 1 0 0 0 0-1.414"></svg:path>`,
})
export class UimUserArrowsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
