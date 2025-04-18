import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPodiumSilverIcon],svg[mdi-podium-silver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 10.09l2.45 1.49l-.65-2.81L24 6.89l-2.89-.25L20 4l-1.13 2.64l-2.87.25l2.18 1.88l-.68 2.81zM23 23h-6V13h6zM1 17v6h6v-6zm4 4H3v-2h2zm4-11v13h6V10zm4 11h-2v-9h2z"></svg:path>`,
})
export class MdiPodiumSilverIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
