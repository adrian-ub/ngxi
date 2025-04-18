import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionDesktopOutlineIcon],svg[ion-desktop-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="448" height="320" x="32" y="64" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="32" ry="32"></svg:rect><svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m304 448l-8-64h-80l-8 64z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 448H144"></svg:path><svg:path fill="currentColor" d="M32 304v48a32.09 32.09 0 0 0 32 32h384a32.09 32.09 0 0 0 32-32v-48Zm224 64a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class IonDesktopOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
