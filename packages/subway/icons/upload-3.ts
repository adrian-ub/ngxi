import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayUpload3Icon],svg[subway-upload-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M209.5 418.9h93.1V232.7h139.6L256 0L69.8 232.7h139.6v186.2zM0 465.5V512h512v-46.5z"></svg:path>`,
})
export class SubwayUpload3Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
