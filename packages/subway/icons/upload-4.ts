import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayUpload4Icon],svg[subway-upload-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M69.8 325.8h139.6V512h93.1V325.8h139.6L256 93.1zM0 0v46.5h512V0z"></svg:path>`,
})
export class SubwayUpload4Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
