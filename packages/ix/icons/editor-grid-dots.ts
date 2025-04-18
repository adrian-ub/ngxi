import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixEditorGridDotsIcon],svg[ix-editor-grid-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 448H64V64h384zm-341.333-42.667h298.666V106.667H106.667zM192 320v42.667h-42.667V320zm85.333 0v42.667h-42.666V320zm85.334 0v42.667H320V320zM192 234.667v42.666h-42.667v-42.666zm85.333 0v42.666h-42.666v-42.666zm85.334 0v42.666H320v-42.666zM192 149.333V192h-42.667v-42.667zm85.333 0V192h-42.666v-42.667zm85.334 0V192H320v-42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxEditorGridDotsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
