import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPrismaIcon],svg[arcticons-prisma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.525 10.3L6.356 31.378c-2.433 4.215.609 9.483 5.476 9.483h24.336c4.867 0 7.909-5.268 5.476-9.483L29.475 10.301c-2.433-4.215-8.517-4.215-10.95 0Z"></svg:path>`,
})
export class ArcticonsPrismaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
