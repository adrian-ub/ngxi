import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionWatchSharpIcon],svg[ion-watch-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="240" height="240" x="136" y="136" fill="currentColor" rx="8" ry="8"></svg:rect><svg:path fill="currentColor" d="M384 96h-48V16H176v80h-48a32 32 0 0 0-32 32v256a32 32 0 0 0 32 32h48v80h160v-80h48a32 32 0 0 0 32-32V128a32 32 0 0 0-32-32m8 272a24 24 0 0 1-24 24H144a24 24 0 0 1-24-24V144a24 24 0 0 1 24-24h224a24 24 0 0 1 24 24Z"></svg:path>`,
})
export class IonWatchSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
