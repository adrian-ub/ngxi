import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTransitionSlideIcon],svg[material-symbols-light-transition-slide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.616 19q-.691 0-1.153-.462T2 17.384V6.616q0-.691.463-1.153T3.616 5h1.807q.69 0 1.153.463t.463 1.153v10.769q0 .69-.463 1.153T5.423 19zm7.423 0q-.691 0-1.153-.462t-.463-1.153V6.615q0-.69.463-1.152T11.039 5h9.346q.69 0 1.153.463T22 6.616v10.769q0 .69-.462 1.153T20.385 19z"></svg:path>`,
})
export class MaterialSymbolsLightTransitionSlideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
