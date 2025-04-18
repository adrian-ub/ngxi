import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBusinessMessagesIcon],svg[material-symbols-light-business-messages-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.942 19q-.728 0-1.22-.462q-.491-.463-.491-1.153V8.846L2 5h17.289q.728 0 1.22.463q.491.462.491 1.153v10.769q0 .69-.491 1.153q-.492.462-1.22.462zm5.654-2.5l.708-.708l-1.754-1.6h5.316v-1h-7.75zm-3.48-5.692h7.75L13.404 7.5l-.708.708l1.754 1.6H9.116z"></svg:path>`,
})
export class MaterialSymbolsLightBusinessMessagesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
