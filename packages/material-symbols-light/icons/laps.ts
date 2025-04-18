import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLapsIcon],svg[material-symbols-light-laps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 19.808l-.713-.689l2.1-2.1H9q-2.502 0-4.251-1.758T3 11t1.749-4.251T9 5h6q2.502 0 4.251 1.749T21 11t-1.749 4.26Q17.502 17.02 15 17.02v-1q2.094 0 3.547-1.463T20 11t-1.453-3.547T15 6H9Q6.906 6 5.453 7.453T4 11t1.453 3.563T9 16.064h1.439L8.31 13.92l.69-.689l3.289 3.288z"></svg:path>`,
})
export class MaterialSymbolsLightLapsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
