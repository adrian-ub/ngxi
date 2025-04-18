import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilUserArrowsIcon],svg[uil-user-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.64 15.772a3.47 3.47 0 0 0 .86-2.272a3.5 3.5 0 0 0-7 0a3.47 3.47 0 0 0 .86 2.272A4.99 4.99 0 0 0 13 20a1 1 0 0 0 2 0a3 3 0 0 1 6 0a1 1 0 0 0 2 0a4.99 4.99 0 0 0-2.36-4.228M18 15a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 18 15M6.793 7.707l2 2a1 1 0 0 0 1.414-1.414L9.914 8h4.172l-.293.293a1 1 0 1 0 1.414 1.414l2-2a1.004 1.004 0 0 0 0-1.414l-2-2a1 1 0 0 0-1.414 1.414l.293.293H9.914l.293-.293a1 1 0 0 0-1.414-1.414l-2 2a1.004 1.004 0 0 0 0 1.414m1.847 8.065A3.47 3.47 0 0 0 9.5 13.5a3.5 3.5 0 0 0-7 0a3.47 3.47 0 0 0 .86 2.272A4.99 4.99 0 0 0 1 20a1 1 0 0 0 2 0a3 3 0 0 1 6 0a1 1 0 0 0 2 0a4.99 4.99 0 0 0-2.36-4.228M6 15a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 6 15"></svg:path>`,
})
export class UilUserArrowsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
