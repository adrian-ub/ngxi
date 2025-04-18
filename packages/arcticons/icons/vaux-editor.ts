import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVauxEditorIcon],svg[arcticons-vaux-editor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.001 42.5a3.82 3.82 0 0 1-3.528-2.357L8.299 10.781a3.82 3.82 0 0 1 7.055-2.925l12.173 29.362a3.82 3.82 0 0 1-3.526 5.282"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 28.71l8.646-20.854a3.82 3.82 0 0 1 7.055 2.925L27.527 40.143"></svg:path>`,
})
export class ArcticonsVauxEditorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
