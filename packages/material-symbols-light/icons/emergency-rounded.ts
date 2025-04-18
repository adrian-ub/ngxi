import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEmergencyRoundedIcon],svg[material-symbols-light-emergency-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.75 19.25v-5.065l-4.4 2.542q-.452.254-.95.117t-.752-.6q-.254-.446-.127-.946t.579-.75L9.5 12L5.1 9.477q-.452-.248-.579-.752t.127-.956t.762-.588t.96.117l4.38 2.543V4.75q0-.518.365-.884t.882-.366t.885.366t.368.884v5.09l4.4-2.542q.452-.254.95-.117t.752.588t.12.956t-.578.752L14.5 12l4.4 2.548q.453.25.579.75q.127.5-.127.964q-.254.446-.762.582q-.507.137-.96-.117l-4.38-2.543v5.066q0 .518-.365.884t-.882.366t-.885-.366t-.368-.884"></svg:path>`,
})
export class MaterialSymbolsLightEmergencyRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
