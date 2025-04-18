import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifNzIcon],svg[cif-nz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="cifNz0" d="M.5.5h150v75H.5z"></svg:path><svg:path id="cifNz1" d="m.5.5l75 37.5H.5zm75 0h75L75.5 38zm0 37.5h75v37.5zm0 0v37.5H.5z"></svg:path></svg:defs><svg:g fill="none" fill-rule="evenodd"><svg:path fill="#00247D" fill-rule="nonzero" d="M.5.5h300v150H.5z"></svg:path><svg:mask id="cifNz2" fill="#fff"><svg:use href="#cifNz0"></svg:use></svg:mask><svg:path fill="#000" fill-rule="nonzero" stroke="#FFF" stroke-width="15" d="m.5.5l150 75m-150 0l150-75" mask="url(#cifNz2)"></svg:path><svg:mask id="cifNz3" fill="#fff"><svg:use href="#cifNz1"></svg:use></svg:mask><svg:path fill="#000" fill-rule="nonzero" stroke="#CC142B" stroke-width="10" d="m.5.5l150 75m-150 0l150-75" mask="url(#cifNz3)"></svg:path><svg:path fill="#000" fill-rule="nonzero" stroke="#FFF" stroke-width="25" d="M75.5.5v75M.5 38h150"></svg:path><svg:path fill="#000" fill-rule="nonzero" stroke="#CC142B" stroke-width="15" d="M75.5.5v75M.5 38h150"></svg:path><svg:path fill="#FFF" fill-rule="nonzero" d="m245.108 53.043l6.242 4.535l-2.384 7.338l6.242-4.535l6.242 4.535l-2.384-7.338l6.242-4.535h-7.716l-2.384-7.338l-2.384 7.338z"></svg:path><svg:path fill="#CC142B" fill-rule="nonzero" d="m248.958 54.294l3.863 2.806l-1.476 4.541l3.863-2.806l3.863 2.806l-1.475-4.541l3.862-2.806h-4.774l-1.476-4.541l-1.475 4.541z"></svg:path><svg:path fill="#FFF" fill-rule="nonzero" d="m214.15 26.812l7.015 5.096l-2.68 8.247l7.015-5.097l7.015 5.097l-2.679-8.247l7.014-5.096h-8.671l-2.679-8.246l-2.679 8.246z"></svg:path><svg:path fill="#CC142B" fill-rule="nonzero" d="m218 28.063l4.635 3.367l-1.77 5.45l4.635-3.368l4.635 3.368l-1.77-5.45L233 28.063h-5.729l-1.771-5.449l-1.771 5.449z"></svg:path><svg:path fill="#FFF" fill-rule="nonzero" d="m179.491 61.683l7.014 5.096l-2.679 8.247l7.015-5.097l7.015 5.097l-2.68-8.247l7.015-5.096h-8.671l-2.679-8.246l-2.68 8.246z"></svg:path><svg:path fill="#CC142B" fill-rule="nonzero" d="m183.341 62.934l4.635 3.367l-1.771 5.45l4.636-3.368l4.635 3.368l-1.77-5.45l4.635-3.367h-5.73l-1.77-5.449l-1.771 5.449z"></svg:path><svg:path fill="#FFF" fill-rule="nonzero" d="m212.9 116.406l7.787 5.658l-2.974 9.154l7.787-5.658l7.787 5.658l-2.974-9.154l7.787-5.658h-9.625l-2.975-9.155l-2.974 9.155z"></svg:path><svg:path fill="#CC142B" fill-rule="nonzero" d="m216.75 117.657l5.408 3.929l-2.066 6.357l5.408-3.929l5.408 3.929l-2.066-6.357l5.408-3.929h-6.684L225.5 111.3l-2.066 6.357z"></svg:path></svg:g>`,
})
export class CifNzIcon {
  readonly viewBox = input("0 0 301 151")
  readonly width = input("2em")
  readonly height = input("1em")
}
