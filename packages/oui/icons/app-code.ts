import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiAppCodeIcon],svg[oui-app-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.276 29l.594 2H0l7.621-14.29l.811 2.73L3.333 29zm17.644 2l-4.987-16.598A16 16 0 0 0 8.688 3l1.8 6H8.4L6 1h2.607a18 18 0 0 1 17.241 12.828L31 31z"></svg:path><svg:path fill="currentColor" d="M12.037 14.02L16.492 29h6.827l-2.333-7.849a10 10 0 0 0-8.949-7.13M9.35 12h2.05a12 12 0 0 1 11.503 8.581L26 31H15z" class="ouiIcon__fillSecondary"></svg:path>`,
})
export class OuiAppCodeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
