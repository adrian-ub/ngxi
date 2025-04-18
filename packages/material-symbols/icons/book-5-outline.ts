import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBook5OutlineIcon],svg[material-symbols-book-5-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.75 22q-1.125 0-1.937-.763T4 19.35V5.4q0-.95.588-1.7t1.537-.95L16 .8v16l-9.475 1.9q-.225.05-.375.238T6 19.35q0 .275.225.463T6.75 20H18V4h2v18zM9 16.175l5-.975V3.25l-5 .975zm-2 .4V4.625l-.375.075q-.275.05-.45.238T6 5.4v11.425q.125-.05.263-.087t.262-.063zm-1-11.8v12.05z"></svg:path>`,
})
export class MaterialSymbolsBook5OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
