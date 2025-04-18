import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFlippIcon],svg[arcticons-flipp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m32.657 21.61l-1.045 9.94m-20.748-2.612l1.4-13.327c.168-1.591 1.487-2.66 3.078-2.492c1.393.146 2.146.628 2.66 1.486m-8.813 3.634h5.6m3.173-1.158l-1.098 10.443c-.094.895.465 1.418 1.335 1.649c.154.04.368.047.948.047m3.347-8.057l-.847 8.056m2.568-2.984a3.01 3.01 0 0 0 2.67 3.297a3.01 3.01 0 0 0 3.297-2.67l.204-1.94a3.01 3.01 0 0 0-2.67-3.296a3.01 3.01 0 0 0-3.297 2.67m7.705 2.386a3.01 3.01 0 0 0 2.67 3.297a3.01 3.01 0 0 0 3.297-2.67l.204-1.94a3.01 3.01 0 0 0-2.67-3.296a3.01 3.01 0 0 0-3.297 2.67m-7.58-3.58l-1.045 9.94m-.315 3c-3.107 11.596-17.846-1.5.158-1.5c5.527 0 12.44 2.62 15.265-.206"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4"></svg:path><svg:circle cx="22.587" cy="18.989" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsFlippIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
