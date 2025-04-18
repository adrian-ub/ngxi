import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconSyncIcon],svg[codicon-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.006 8.267L.78 9.5L0 8.73l2.09-2.07l.76.01l2.09 2.12l-.76.76l-1.167-1.18a5 5 0 0 0 9.4 1.983l.813.597a6 6 0 0 1-11.22-2.683m10.99-.466L11.76 6.55l-.76.76l2.09 2.11l.76.01l2.09-2.07l-.75-.76l-1.194 1.18a6 6 0 0 0-11.11-2.92l.81.594a5 5 0 0 1 9.3 2.346z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconSyncIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
