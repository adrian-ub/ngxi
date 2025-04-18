import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsObedienceIcon],svg[arcticons-obedience-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="24" cy="17.767" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="19.5" ry="7.973"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.03 20.807c-2.924-2.895-9.895-4.931-18.03-4.931S8.893 17.913 5.969 20.807"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 17.767v7.422c0 4.403 8.73 7.973 19.5 7.973s19.5-3.57 19.5-7.973v-7.422"></svg:path><svg:circle cx="24.194" cy="33.895" r="4.311" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.194 30.268v-1.369"></svg:path>`,
})
export class ArcticonsObedienceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
