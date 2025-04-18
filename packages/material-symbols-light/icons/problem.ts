import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightProblemIcon],svg[material-symbols-light-problem-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.001 16.154q.328 0 .548-.222t.22-.549t-.221-.548t-.55-.22t-.547.222t-.22.549t.221.548t.55.22M6.5 13.23h1V7.846h-1zm4 1.269h7v-1h-7zm0-4h7v-1h-7zM4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19z"></svg:path>`,
})
export class MaterialSymbolsLightProblemIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
