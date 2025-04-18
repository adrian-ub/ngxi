import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeysmithIcon],svg[arcticons-keysmith-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="29.181" r="14.319" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.619 18.366V13.88a9.381 9.381 0 0 1 18.762 0v4.371"></svg:path><svg:circle cx="24" cy="29.181" r="4.938" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 20.894v-2.682m5.86 5.11l1.896-1.897m.531 7.756h2.682m-5.109 5.86l1.896 1.897m-7.756.53v2.682m-5.86-5.109l-1.896 1.897m-.531-7.757h-2.682m5.109-5.859l-1.896-1.897M24 14.863v1.328"></svg:path>`,
})
export class ArcticonsKeysmithIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
