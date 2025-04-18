import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumSquareInfoIcon],svg[circum-square-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.438 20.937H5.564a2.5 2.5 0 0 1-2.5-2.5V5.563a2.5 2.5 0 0 1 2.5-2.5h12.874a2.5 2.5 0 0 1 2.5 2.5v12.874a2.5 2.5 0 0 1-2.5 2.5M5.564 4.063a1.5 1.5 0 0 0-1.5 1.5v12.874a1.5 1.5 0 0 0 1.5 1.5h12.874a1.5 1.5 0 0 0 1.5-1.5V5.563a1.5 1.5 0 0 0-1.5-1.5Z"></svg:path><svg:path fill="currentColor" d="M12.5 9a.5.5 0 0 0-1 0v4.018a.5.5 0 0 0 1 0Z"></svg:path><svg:circle cx="12" cy="14.999" r=".5" fill="currentColor"></svg:circle>`,
})
export class CircumSquareInfoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
