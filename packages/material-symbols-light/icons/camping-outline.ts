import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCampingOutlineIcon],svg[material-symbols-light-camping-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21.5v-3.842l8.385-11.281l-1.135-1.504l.812-.604L12 5.548l.958-1.279l.792.604l-1.115 1.504L21 17.657V21.5zm9-14.275L4 17.981V20.5h3.25L12 13.866l4.75 6.634H20v-2.52zM8.489 20.5h7.023L12 15.585zM12 13.866l4.75 6.634zL7.25 20.5z"></svg:path>`,
})
export class MaterialSymbolsLightCampingOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
