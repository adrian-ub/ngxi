import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayDownload4Icon],svg[subway-download-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M302.5 93.1h-93.1v186.2H69.8L256 512l186.2-232.7H302.5zM0 0v46.5h512V0z"></svg:path>`,
})
export class SubwayDownload4Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
