import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAddCardIcon],svg[material-symbols-light-add-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11.192h16V8.808H4zM19.5 21.5v-3h-3v-1h3v-3h1v3h3v1h-3v3zM4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616V12.5h-1.5q-2.075 0-3.537 1.463T14.5 17.5V19z"></svg:path>`,
})
export class MaterialSymbolsLightAddCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
