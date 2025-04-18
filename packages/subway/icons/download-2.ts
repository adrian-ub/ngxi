import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayDownload2Icon],svg[subway-download-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M442.2 186.2H302.5V0h-93.1v186.2H69.8L256 418.9zm23.3 186.2v93.1h-419v-93.1H0V512h512V372.4z"></svg:path>`,
})
export class SubwayDownload2Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
