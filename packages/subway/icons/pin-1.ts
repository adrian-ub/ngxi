import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayPin1Icon],svg[subway-pin-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M59.1 236.3h393.8s-19.7-98.5-98.5-98.5V59.1L413.5 0h-315l59.1 59.1v78.8c-78.8-.1-98.5 98.4-98.5 98.4M256 512l39.4-256h-78.8z"></svg:path>`,
})
export class SubwayPin1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
