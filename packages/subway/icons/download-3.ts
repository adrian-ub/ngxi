import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayDownload3Icon],svg[subway-download-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M442.2 186.2H302.5V0h-93.1v186.2H69.8L256 418.9zM0 465.5V512h512v-46.5z"></svg:path>`,
})
export class SubwayDownload3Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
