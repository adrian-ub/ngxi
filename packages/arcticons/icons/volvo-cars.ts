import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVolvoCarsIcon],svg[arcticons-volvo-cars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.88 6.103A21.35 21.35 0 0 0 24 2.5C12.126 2.5 2.5 12.126 2.5 24S12.126 45.5 24 45.5S45.5 35.874 45.5 24c0-4.397-1.335-8.475-3.602-11.879M45.5 2.5h-9.627l4.058 3.189l-1.979 1.979l2.381 2.38l1.978-1.979l3.189 4.058z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.754 20.743l-2.877 6.514L7 20.743"></svg:path><svg:rect width="5.429" height="6.514" x="14.839" y="20.743" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.714" ry="2.714"></svg:rect><svg:rect width="5.429" height="6.514" x="35.571" y="20.743" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.714" ry="2.714"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m33.486 20.743l-2.878 6.514l-2.877-6.514m-4.579 0v6.514h4.343"></svg:path>`,
})
export class ArcticonsVolvoCarsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
