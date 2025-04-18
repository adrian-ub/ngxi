import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayVideo1Icon],svg[subway-video-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M395.6 69.8L325.8 0h-58.2l69.8 69.8zM23.3 0H0v69.8h93.1zm221.1 69.8L174.5 0h-58.2l69.8 69.8zm174.5 93.1h-93.1l69.8-69.8h-58.2l-69.8 69.8h-93.1l69.8-69.8h-58.2l-69.8 69.8h-93l69.8-69.8H0v372.4C0 491.1 20.9 512 46.5 512h418.9c25.7 0 46.5-20.9 46.5-46.5V93.1h-23.3zM186.2 442.2V232.7l186.2 104.7zM418.9 0l69.8 69.8H512V0z"></svg:path>`,
})
export class SubwayVideo1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
