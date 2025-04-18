import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMonitorIcon],svg[ion-monitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M468.7 64H43.3c-6 0-11.3 5-11.3 11.1v265.7c0 6.2 5.2 11.1 11.3 11.1h425.4c6 0 11.3-5 11.3-11.1V75.1c0-6.1-5.2-11.1-11.3-11.1zM448 320H64V96h384v224z" fill="currentColor"></svg:path><svg:path d="M302.5 448c28-.5 41.5-3.9 29-12.5-12.5-8.7-28.5-15.3-29-22.5-.3-3.7-1.7-45-1.7-45h-89.6s-1.5 41.3-1.7 45c-.5 7.1-16.5 13.8-29 22.5s1 12 29 12.5h93z" fill="currentColor"></svg:path>`,
})
export class IonMonitorIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
