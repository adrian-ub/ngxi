import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiMountainCablewayIcon],svg[twemoji-mountain-cableway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#58595B" d="M19 12V5h-2v7h-5v5h12v-5z"></svg:path><svg:path fill="#FFD983" d="M34 28V18a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v10z"></svg:path><svg:path fill="#269" d="M2 22v6a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8v-6z"></svg:path><svg:path fill="#88C9F9" d="M2 18h6v9H2zm8 0h7v9h-7zm9 0h7v9h-7zm9 0h6v9h-6z"></svg:path><svg:path fill="#6D6E71" d="M33.213 10.977L3.27 2.954a1.001 1.001 0 0 1 .518-1.933L33.73 9.045a1 1 0 1 1-.517 1.932"></svg:path><svg:path fill="#A7A9AC" d="m23.348 4.361l-1.933-.518l.259-.965l-5.795-1.553l-.259.966l-1.932-.518a2 2 0 0 0-1.036 3.864l9.66 2.588a2 2 0 0 0 1.036-3.864"></svg:path><svg:path fill="#808285" d="M13.877 4.931a2.001 2.001 0 0 1-3.864-1.035a2.001 2.001 0 0 1 3.864 1.035m11.592 3.105a2 2 0 1 1-3.863-1.035a2 2 0 0 1 3.863 1.035"></svg:path><svg:path fill="#55ACEE" d="M2 18h6v2H2zm8 0h7v2h-7zm9 0h7v2h-7zm9 0h6v2h-6z"></svg:path>`,
})
export class TwemojiMountainCablewayIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
