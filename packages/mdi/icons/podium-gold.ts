import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPodiumGoldIcon],svg[mdi-podium-gold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 7.09l2.45 1.49l-.65-2.81L16 3.89l-2.89-.25L12 1l-1.13 2.64L8 3.89l2.18 1.88l-.68 2.81zM15 23H9V10h6zM1 17v6h6v-6zm4 4H3v-2h2zm12-8v10h6V13zm4 8h-2v-6h2z"></svg:path>`,
})
export class MdiPodiumGoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
