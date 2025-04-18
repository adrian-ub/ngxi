import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPhantomIcon],svg[arcticons-phantom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="35.862" cy="18.915" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.827" ry="2.61"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.85 32.819c-.948 9.482 7.654 4.308 10.862-.366c.663 8.898 8.475-.07 10.235-4.387c4.951-12.149-1.98-27.98-20.889-15.617c-23.454 15.336-14.826 39.875-.208 20.37"></svg:path><svg:ellipse cx="29.72" cy="18.716" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.827" ry="2.61"></svg:ellipse>`,
})
export class ArcticonsPhantomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
