import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesEditorListBulletsSolidIcon],svg[bubbles-editor-list-bullets-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 1a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m-.354 2.146a.5.5 0 1 1 .708.708a.5.5 0 0 1-.708-.708M7 2.5a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2zM.732 8.732a2.5 2.5 0 1 1 3.536 3.536A2.5 2.5 0 0 1 .732 8.732M2.5 10a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1M7 9.5a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2zM.732 15.732a2.5 2.5 0 1 1 3.536 3.536a2.5 2.5 0 0 1-3.536-3.536M2.5 17a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m4.5-.5a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class BubblesEditorListBulletsSolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
