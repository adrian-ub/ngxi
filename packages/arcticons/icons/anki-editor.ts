import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAnkiEditorIcon],svg[arcticons-anki-editor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m20.3 18.1l3.7 6.2l7.3-.4l-4.8 5.4l2.9 6.8l-6.6-3.1l-5.6 4.9l.6-7.3l-6.1-3.7l7.1-1.6zm14.1-8.4l-.4 3.5l2.7 1.7l-3.1.5l-1 3.2l-1.6-2.8l-3.3.1l2.2-2.4l-1.1-3.1l3.1 1.5z"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsAnkiEditorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
