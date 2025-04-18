import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVectorCameraIcon],svg[arcticons-vector-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="26.372" r="10.014" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="26.372" r="6.324" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.5 12.142h-8.457L31.2 7.992a1 1 0 0 0-.914-.593h-12.57a1 1 0 0 0-.914.594l-1.844 4.149H6.5a2 2 0 0 0-2 2v24.46a2 2 0 0 0 2 2h35a2 2 0 0 0 2-2v-24.46a2 2 0 0 0-2-2"></svg:path>`,
})
export class ArcticonsVectorCameraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
