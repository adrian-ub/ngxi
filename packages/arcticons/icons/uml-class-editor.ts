import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUmlClassEditorIcon],svg[arcticons-uml-class-editor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 9.2h11.1m0 12.955V5.5H5.5v16.645zM5.5 15.678h11.1m-5.545 13.867h11.1m0 12.955V25.845h-11.1l-.01 16.655zm-11.1-6.478h11.1m8.323-16.644H42.5m0 12.944V15.678H30.478v16.644zm-12.022-6.477H42.5m-25.9-6.928q6.478.771 13.878 3.7m-8.323 10.167q3.7-2.617 8.323-3.7"></svg:path>`,
})
export class ArcticonsUmlClassEditorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
