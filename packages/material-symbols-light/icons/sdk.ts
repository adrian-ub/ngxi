import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSdkIcon],svg[material-symbols-light-sdk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.616 20q-.672 0-1.144-.472T4 18.385V7q0-.177.036-.326t.145-.27L5.542 4.78q.11-.14.253-.21t.32-.071h11.77q.176 0 .32.07t.253.21l1.361 1.624q.11.121.146.27T20 7v11.385q0 .67-.472 1.143q-.472.472-1.143.472zM5.4 6.5h13.2l-.85-1H6.25zm9.15 9.82l2.82-2.82l-2.82-2.82l-.72.72l2.1 2.1l-2.1 2.1zm-5.05 0l.72-.72l-2.1-2.1l2.1-2.1l-.72-.72l-2.82 2.82z"></svg:path>`,
})
export class MaterialSymbolsLightSdkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
