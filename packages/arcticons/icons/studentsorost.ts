import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsStudentsorostIcon],svg[arcticons-studentsorost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="23.951" cy="23.951" r="6.203" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="35.098" cy="14.55" r="6.203" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="21.141" cy="9.703" r="6.203" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="10.285" cy="19.493" r="6.203" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="37.715" cy="28.895" r="6.203" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="26.762" cy="38.297" r="6.203" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="13.193" cy="33.644" r="6.203" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.916 26.86c.582.484.97.58 2.133.58h.581c.872 0 1.648-.774 1.648-1.647h0c0-.872-.775-1.648-1.648-1.648h-1.26c-.872 0-1.648-.775-1.648-1.647h0c0-.873.776-1.648 1.648-1.648h.582c1.26 0 1.648.097 2.132.581"></svg:path>`,
})
export class ArcticonsStudentsorostIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
