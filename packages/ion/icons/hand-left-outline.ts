import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionHandLeftOutlineIcon],svg[ion-hand-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M80 320V144a32 32 0 0 1 32-32h0a32 32 0 0 1 32 32v112m0 0V80a32 32 0 0 1 32-32h0a32 32 0 0 1 32 32v160m64 1V96a32 32 0 0 1 32-32h0a32 32 0 0 1 32 32v224m-128-80V48a32 32 0 0 1 32-32h0a32 32 0 0 1 32 32v192"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M80 320c0 117.4 64 176 152 176s123.71-39.6 144-88l52.71-144c6.66-18.05 3.64-34.79-11.87-43.6h0c-15.52-8.82-35.91-4.28-44.31 11.68L336 320"></svg:path>`,
})
export class IonHandLeftOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
