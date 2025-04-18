import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonTrashSimpleFillIcon],svg[iconamoon-trash-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 2a1 1 0 0 0-.894.553L6.382 6H4a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8h1a1 1 0 1 0 0-2h-2.382l-1.724-3.447A1 1 0 0 0 15 2zm6.382 4l-1-2H9.618l-1 2z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonTrashSimpleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
