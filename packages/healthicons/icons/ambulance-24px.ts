import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsAmbulance24pxIcon],svg[healthicons-ambulance-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M18 3a1 1 0 1 0-2 0v1.5a1 1 0 1 0 2 0z"></svg:path><svg:path fill-rule="evenodd" d="M3 4a1 1 0 0 0-1 1v14h2.05q-.05.243-.05.5a2.5 2.5 0 1 0 4.95-.5h6.1q-.05.243-.05.5a2.5 2.5 0 1 0 4.95-.5H22v-4.73a2 2 0 0 0-.272-1.007l-1.908-3.27A2 2 0 0 0 18.092 9H18V8a1 1 0 1 0-2 0v1h-1V5a1 1 0 0 0-1-1zm10 11v2H4v-2zm2 0v2h5v-2zm3.092-4H15v2h4.259zM7.5 7v1.5H6v2h1.5V12h2v-1.5H11v-2H9.5V7z" clip-rule="evenodd"></svg:path><svg:path d="m21.207 5.207l-1.06 1.06a1 1 0 1 1-1.415-1.413l1.06-1.061a1 1 0 1 1 1.415 1.414M22 9a1 1 0 1 0 0-2h-1.5a1 1 0 1 0 0 2z"></svg:path></svg:g>`,
})
export class HealthiconsAmbulance24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
