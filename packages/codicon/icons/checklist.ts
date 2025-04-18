import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconChecklistIcon],svg[codicon-checklist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.75 4.48h-.71L2 3.43l.71-.7l.69.68L4.81 2l.71.71zM6.99 3h8v1h-8zm0 3h8v1h-8zm8 3h-8v1h8zm-8 3h8v1h-8zM3.04 7.48h.71l1.77-1.77l-.71-.7L3.4 6.42l-.69-.69l-.71.71zm.71 3.01h-.71L2 9.45l.71-.71l.69.69l1.41-1.42l.71.71zm-.71 3.01h.71l1.77-1.77l-.71-.71l-1.41 1.42l-.69-.69l-.71.7z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconChecklistIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
