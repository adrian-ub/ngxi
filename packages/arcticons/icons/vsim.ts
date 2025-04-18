import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVsimIcon],svg[arcticons-vsim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="18.041" height="13.53" x="16.439" y="23.668" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.127"></svg:rect><svg:rect width="7.517" height="3.007" x="21.701" y="28.93" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".752"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.197 24.044v12.779m10.524-12.779v12.779M19.822 28.93h-3.007m17.289 0h-3.007m3.007 3.007h-3.007m-11.275 0h-3.007m6.389-7.893v4.51m0 3.759v4.51m4.51-12.779v4.51m0 3.759v4.51M29.729 4.5H13.056a1.503 1.503 0 0 0-1.503 1.503v33.075a1.503 1.503 0 0 0 1.503 1.503h24.806a1.503 1.503 0 0 0 1.504-1.503V14.832Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.553 7.419h-1.415a1.503 1.503 0 0 0-1.504 1.503v33.075a1.503 1.503 0 0 0 1.504 1.503h24.806a1.503 1.503 0 0 0 1.503-1.503V40.58"></svg:path>`,
})
export class ArcticonsVsimIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
