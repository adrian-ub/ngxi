import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosTodayIcon],svg[ion-ios-today-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M388 32H124c-33.1 0-60 26.9-60 60v328c0 33.1 26.9 60 60 60h264c33.1 0 60-26.9 60-60V92c0-33.1-26.9-60-60-60zm32 388c0 17.6-14.4 32-32 32H124c-17.6 0-32-14.4-32-32V92c0-17.6 14.4-32 32-32h264c17.6 0 32 14.4 32 32v328z" fill="currentColor"></svg:path><svg:path d="M360 176H152c-13.2 0-24 10.8-24 24v192c0 13.2 10.8 24 24 24h208c13.2 0 24-10.8 24-24V200c0-13.2-10.8-24-24-24z" fill="currentColor"></svg:path><svg:path d="M142 124h100c7.7 0 14-6.3 14-14s-6.3-14-14-14H142c-7.7 0-14 6.3-14 14s6.3 14 14 14z" fill="currentColor"></svg:path>`,
})
export class IonIosTodayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
