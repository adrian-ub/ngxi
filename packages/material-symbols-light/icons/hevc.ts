import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHevcIcon],svg[material-symbols-light-hevc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.308 14.692V9.308h.884v2h1.616v-2h.884v5.384h-.884v-2.5H4.192v2.5zm4.961 0V9.308h2.885v.884h-2v1.116h2v.884h-2v1.616h2v.884zm5.27 0l-1.193-5.384h.904l1 4.461l1-4.461h.904l-1.193 5.384zm4.538 0q-.327 0-.548-.22q-.221-.222-.221-.549v-3.846q0-.327.22-.548q.222-.221.549-.221h1.846q.327 0 .548.22q.221.222.221.549v.615h-.884v-.5h-1.616v3.616h1.616v-.5h.884v.615q0 .327-.22.548q-.222.221-.549.221z"></svg:path>`,
})
export class MaterialSymbolsLightHevcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
