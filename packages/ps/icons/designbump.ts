import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psDesignbumpIcon],svg[ps-designbump-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m258 278l-18 16V130h81L182 2L43 130h80v40l-17-12L5 252h51v210h92V252h57l-67-64v-79H82l100-92l100 92h-57v202l-66 59h56v92h92v-92h51z"></svg:path>`,
})
export class PsDesignbumpIcon {
  readonly viewBox = input("0 0 360 488")
  readonly width = input("0.74em")
  readonly height = input("1em")
}
