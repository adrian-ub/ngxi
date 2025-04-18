import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOnsenIcon],svg[arcticons-onsen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.788 24.99c5.577 2.43 7.245 6.087 4.227 9.263S31.887 39.5 24 39.5S9.003 37.429 5.985 34.253s-1.35-6.832 4.227-9.263"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.729 8.5c-11.654 11.654 9.158 9.841-4 23m-3.499-23c-11.654 11.654 9.158 9.841-4 23m18.999-23c-11.654 11.654 9.158 9.841-4 23"></svg:path>`,
})
export class ArcticonsOnsenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
