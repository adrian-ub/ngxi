import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPodiumBronzeIcon],svg[mdi-podium-bronze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 13.09l2.45 1.49l-.65-2.81L8 9.89l-2.89-.25L4 7L2.87 9.64L0 9.89l2.18 1.88l-.68 2.81zM7 23H1v-6h6zm2-13v13h6V10zm4 11h-2v-9h2zm4-8v10h6V13zm4 8h-2v-6h2z"></svg:path>`,
})
export class MdiPodiumBronzeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
