import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGauthmathIcon],svg[arcticons-gauthmath-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 14.447V9.175c0-1.213-.895-2.196-2-2.196h-5.606m0 34.042H41.5c1.105 0 2-.983 2-2.196v-5.272m-39 0v5.272c0 1.213.895 2.196 2 2.196h5.606m0-34.042H6.5c-1.105 0-2 .983-2 2.196v5.272"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.056 37.34h-9.198a1.24 1.24 0 0 1-1.003-.509l-7.996-10.946a3.2 3.2 0 0 1 0-3.77l7.996-10.946c.234-.32.606-.51 1.003-.51h9.198a.63.63 0 0 1 .508 1l-8.342 11.47a1.48 1.48 0 0 0 0 1.741l8.342 11.472a.629.629 0 0 1-.508.998"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.277 18.805l-5.578-7.636a1.24 1.24 0 0 0-1.003-.51H7.944a.629.629 0 0 0-.508 1l8.343 11.47a1.48 1.48 0 0 1 0 1.741L7.436 36.342a.629.629 0 0 0 .508.998h9.752c.397 0 .77-.189 1.003-.509l5.578-7.636"></svg:path>`,
})
export class ArcticonsGauthmathIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
