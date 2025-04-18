import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosBrowserstackIcon],svg[logos-browserstack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:radialgradient id="logosBrowserstack0" cx="50.141%" cy="50.003%" r="50.119%" fx="50.141%" fy="50.003%"><svg:stop offset="0%" stop-color="#797979"></svg:stop><svg:stop offset="100%" stop-color="#4C4C4C"></svg:stop></svg:radialgradient></svg:defs><svg:circle cx="127.949" cy="128.603" r="127.397" fill="#F5BB60"></svg:circle><svg:circle cx="114.961" cy="115.615" r="114.685" fill="#E86F32"></svg:circle><svg:circle cx="130.16" cy="100.416" r="99.485" fill="#E53D42"></svg:circle><svg:circle cx="138.174" cy="108.43" r="91.471" fill="#BFD141"></svg:circle><svg:circle cx="131.542" cy="115.062" r="84.839" fill="#6DB64C"></svg:circle><svg:circle cx="118.001" cy="101.798" r="71.298" fill="#AFDBE7"></svg:circle><svg:circle cx="129.607" cy="89.915" r="59.691" fill="#57BADF"></svg:circle><svg:circle cx="137.069" cy="97.376" r="52.506" fill="#02B2D6"></svg:circle><svg:circle cx="129.331" cy="104.837" r="44.768" fill="url(#logosBrowserstack0)"></svg:circle><svg:circle cx="129.331" cy="104.837" r="44.768" fill="#231F20"></svg:circle><svg:path fill="#FFF" d="M141.088 98.971c4.439 1.992 10.56-2.016 13.672-8.951s2.036-14.173-2.402-16.164c-4.44-1.992-10.56 2.016-13.672 8.951s-2.037 14.173 2.402 16.164"></svg:path>`,
})
export class LogosBrowserstackIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
