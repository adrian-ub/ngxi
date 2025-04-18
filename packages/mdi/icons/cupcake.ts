import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCupcakeIcon],svg[mdi-cupcake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.5A2.5 2.5 0 0 1 14.5 4A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 9.5 4A2.5 2.5 0 0 1 12 1.5M15.87 5C18 5 20 7 20 9c2.7 0 2.7 4 0 4H4c-2.7 0-2.7-4 0-4c0-2 2-4 4.13-4c.44 1.73 2.01 3 3.87 3s3.43-1.27 3.87-3M5 15h3l1 7H7zm5 0h4l-1 7h-2zm6 0h3l-2 7h-2z"></svg:path>`,
})
export class MdiCupcakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
