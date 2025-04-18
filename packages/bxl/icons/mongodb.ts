import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxlMongodbIcon],svg[bxl-mongodb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.74 4.23c-.84-1-1.57-2-1.71-2.22H12c-.14.21-.87 1.22-1.71 2.22c-7.2 9.19 1.14 15.39 1.14 15.39l.07.05c.06.95.22 2.33.22 2.33h.62s.15-1.37.21-2.33l.07-.06s8.32-6.19 1.12-15.38M12 19.48a3.5 3.5 0 0 1-.48-.48L12 9l.45 10a3.6 3.6 0 0 1-.45.48"></svg:path>`,
})
export class BxlMongodbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
