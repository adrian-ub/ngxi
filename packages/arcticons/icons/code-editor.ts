import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCodeEditorIcon],svg[arcticons-code-editor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.592 37.092L4.5 24l13.092-13.092m2.824 26.202l7.218-26.219m2.774.017L43.5 24L30.408 37.092"></svg:path>`,
})
export class ArcticonsCodeEditorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
