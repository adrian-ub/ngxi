import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEndlessSkyIcon],svg[arcticons-endless-sky-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 2.5l3.571 17.929L45.5 24l-17.929 3.571L24 45.5l-3.571-17.929L2.5 24l17.929-3.571z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.488 13.512L29.062 24l5.426 10.488L24 29.062l-10.488 5.426L18.938 24l-5.426-10.488L24 18.938zm-13.046 9.055l.563-1.687m-.827 3.915l-.795-1.59m2.184 3.353l-1.687-.563m3.915.827l-1.59.795m3.353-2.184l-.563 1.687m.827-3.915l.795 1.59m-2.184-3.353l1.687.563m-3.915-.827l1.59-.795"></svg:path>`,
})
export class ArcticonsEndlessSkyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
