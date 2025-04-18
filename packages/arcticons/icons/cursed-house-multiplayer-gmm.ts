import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCursedHouseMultiplayerGmmIcon],svg[arcticons-cursed-house-multiplayer-gmm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.958 29.455V18.533l3.271 10.934L35.5 18.549v10.918m-15.84-.012V18.533l3.27 10.934l3.271-10.918v10.918m-9.12-8.644a2.29 2.29 0 0 0-2.29-2.29h0a2.29 2.29 0 0 0-2.291 2.29v6.354a2.29 2.29 0 0 0 2.29 2.29h0a2.29 2.29 0 0 0 2.291-2.29v-1.81h-2.29"></svg:path>`,
})
export class ArcticonsCursedHouseMultiplayerGmmIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
