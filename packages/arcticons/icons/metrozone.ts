import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMetrozoneIcon],svg[arcticons-metrozone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.623 19.311a4.688 4.688 0 1 1 9.377 0v7.736m-9.377-12.424v12.425"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 19.311a4.688 4.688 0 1 1 9.377 0v7.736m-7.843 6.33V28.54l3.163 4.837V28.54m-14.074 0h3.163l-3.163 4.837h3.163m13.204-2.418h1.558m.829 2.418H30.99V28.54h2.387m-11.717 0c.874 0 1.582.717 1.582 1.602v1.633c0 .885-.708 1.602-1.582 1.602h0a1.59 1.59 0 0 1-1.581-1.602v-1.633c0-.885.708-1.602 1.582-1.602"></svg:path>`,
})
export class ArcticonsMetrozoneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
