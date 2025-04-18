import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDeveloperBoardOffIcon],svg[material-symbols-light-developer-board-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.037 15.885l-3.575-3.581v-1.112H14.35l-1.39-1.384h2.502V7.769h-3.039V9.29l-1.057-1.057v-.464h-.458L7.133 4h10.483q.69 0 1.152.463t.463 1.153v2.153h1.538v1h-1.538v2.558h1.538v1h-1.538v2.558h1.538v1zM7 16.23h4.116v-3.039H7zM4.335 4.059l14.877 14.878q-.177.5-.625.781t-.971.282H4.846q-.69 0-1.153-.462t-.462-1.153V5.615q0-.528.299-.958t.805-.597m8.088 8.088v4.083h3.039v-1.044zM8.044 7.769H7v4.039h4.116v-.968zm13.2 14.627L2.021 3.173l.713-.713l19.224 19.223z"></svg:path>`,
})
export class MaterialSymbolsLightDeveloperBoardOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
