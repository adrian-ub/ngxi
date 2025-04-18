import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSpeakerPhoneOutlineSharpIcon],svg[material-symbols-light-speaker-phone-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.45 8.5l-.72-.72q.872-.859 1.977-1.32Q10.81 6 12 6t2.293.46t1.976 1.32l-.719.72q-.725-.725-1.625-1.112T12 7t-1.925.388T8.45 8.5m-2.8-2.9l-.708-.708q1.402-1.396 3.236-2.144Q10.011 2 12 2t3.822.748t3.236 2.144l-.708.708q-1.275-1.25-2.925-1.925T12 3t-3.425.675T5.65 5.6m3.12 15.63V10.77h6.46v10.46zm5.46-1v-8.46H9.77v8.46zm0 0H9.77z"></svg:path>`,
})
export class MaterialSymbolsLightSpeakerPhoneOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
