import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsIDocumentsAccepted24pxIcon],svg[healthicons-i-documents-accepted-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="square" stroke-width="2" d="M18.698 9H20v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6.5v4c0 .458.154.88.413 1.217l-.653.673l-2.154 2.222l-.345-.363l-.688-.725l-.726.689l-1.45 1.378l-.725.688l.69.725l2.496 2.629l.718.755l.725-.748l4.33-4.465l.697-.718l-.718-.696l-1.435-1.393l-.096-.092c.276.143.589.224.921.224z"></svg:path>`,
})
export class HealthiconsIDocumentsAccepted24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
