import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayNext1Icon],svg[subway-next-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469.3 95.3H448c-23.5 0-42.7 19.1-42.7 42.7v52l-152.7-89.8c-21.6-12.7-39.2.1-39.2 28.5v73.9L39.2 100.1C17.6 87.4 0 100.2 0 128.6v274.8c0 28.3 17.6 41.2 39.2 28.5l174.2-102.5v74c0 28.3 17.6 41.2 39.2 28.5l152.7-89.8V394c0 23.5 19.1 42.7 42.7 42.7h21.3c23.5 0 42.7-19.1 42.7-42.7V138c0-23.6-19.1-42.7-42.7-42.7"></svg:path>`,
})
export class SubwayNext1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
