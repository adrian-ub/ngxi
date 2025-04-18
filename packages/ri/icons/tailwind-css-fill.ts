import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riTailwindCssFillIcon],svg[ri-tailwind-css-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.86q-4.76 0-5.95 4.76q1.785-2.38 4.165-1.785c.905.226 1.552.883 2.268 1.61C13.651 10.63 15 12 17.95 12q4.76 0 5.95-4.76q-1.785 2.38-4.165 1.785c-.906-.226-1.552-.883-2.27-1.61C16.3 6.23 14.95 4.86 12 4.86M6.05 12Q1.29 12 .1 16.76q1.785-2.38 4.165-1.785c.905.226 1.552.883 2.269 1.61C7.7 17.77 9.05 19.14 12 19.14q4.76 0 5.95-4.76q-1.785 2.38-4.165 1.785c-.906-.226-1.552-.883-2.27-1.61C10.35 13.37 9 12 6.05 12"></svg:path>`,
})
export class RiTailwindCssFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
