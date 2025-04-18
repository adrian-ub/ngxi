import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOrnaIcon],svg[arcticons-orna-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.64 40.488a16.5 16.5 0 0 0 15.848-15.846m-32.976 0A16.5 16.5 0 0 0 23.36 40.488m-.002-32.976A16.5 16.5 0 0 0 7.512 23.358m32.976 0A16.5 16.5 0 0 0 24.642 7.512"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.823 16.725L24 2.5l-1.823 14.224m0 14.551L24 45.5l1.823-14.225m-9.098-9.098L2.5 24l14.225 1.823m14.551 0L45.5 24l-14.225-1.823"></svg:path><svg:circle cx="24" cy="24" r="7.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.303 29.303L38.5 38.5m-29-29l9.198 9.198m0 10.604L9.5 38.5m29-29l-9.197 9.197"></svg:path>`,
})
export class ArcticonsOrnaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
