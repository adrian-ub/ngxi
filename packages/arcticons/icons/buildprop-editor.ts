import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBuildpropEditorIcon],svg[arcticons-buildprop-editor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.736 28.315a3.244 3.244 0 0 1-3.211-3.256v-2.117a3.212 3.212 0 1 1 6.423 0v2.117a3.244 3.244 0 0 1-3.212 3.256"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.043 22.944a3.244 3.244 0 0 1 3.211-3.256m-3.211 0v8.629m-9.212-3.257a3.212 3.212 0 1 0 6.423 0v-2.116a3.212 3.212 0 1 0-6.423 0m0-3.256v13.025m23.915-7.653a3.212 3.212 0 1 0 6.423 0v-2.116a3.212 3.212 0 1 0-6.423 0m-.001-3.256v13.025" class="b"></svg:path><svg:ellipse cx="7.446" cy="32.459" fill="currentColor" rx=".74" ry=".75"></svg:ellipse>`,
})
export class ArcticonsBuildpropEditorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
