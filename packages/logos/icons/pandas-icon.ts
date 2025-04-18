import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosPandasIconIcon],svg[logos-pandas-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#130754" d="M71.478 24.072h44.504v92.41H71.478zm0 189.825h44.504v92.409H71.478zM0 100.057h44.505v307.175H0zm141.496 190.084H186v92.409h-44.504zm0-189.973H186v92.41h-44.504zM211.496 0H256v307.174h-44.505z"></svg:path><svg:path fill="#FFCA00" d="M71.478 143.454h44.505v43.6H71.478z"></svg:path><svg:path fill="#E70488" d="M141.496 219.55h44.505v43.6h-44.505z"></svg:path>`,
})
export class LogosPandasIconIcon {
  readonly viewBox = input("0 0 256 408")
  readonly width = input("0.63em")
  readonly height = input("1em")
}
