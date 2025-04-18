import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityMediaChangerSolidIcon],svg[clarity-media-changer-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 4H6a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h1.88v1.57a1 1 0 0 0 2 0V32h16v1.57a1 1 0 0 0 2 0V32H30a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M17 28H8.81v-2H17Zm0-4H8.81v-2H17Zm0-4H8.81v-2H17Zm0-4H8.81v-2H17Zm0-4H8.81v-2H17Zm5 12h-2v-2h2Zm0-4h-2v-2h2Zm4 4h-2v-2h2Zm0-4h-2v-2h2Zm0-6h-6v-4h6Z"></svg:path>`,
})
export class ClarityMediaChangerSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
