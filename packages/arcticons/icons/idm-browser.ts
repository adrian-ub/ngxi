import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIdmBrowserIcon],svg[arcticons-idm-browser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.388 11.012c5.289-.285 10.791 2.763 12.617 9.736a8.159 8.159 0 0 1 .06 16.258H13.26c-10.922-1.482-12.416-17.385 0-19.52a12.03 12.03 0 0 1 10.127-6.474m20.113 2.81h-5.656m2.828 2.827v-5.655"></svg:path><svg:circle cx="24" cy="25.636" r="7.654" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.346 25.636h15.308M17.39 21.778h13.221m-13.22 7.715h13.22m-6.61 3.797V17.981"></svg:path><svg:ellipse cx="24" cy="25.636" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.857" ry="7.654"></svg:ellipse>`,
})
export class ArcticonsIdmBrowserIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
