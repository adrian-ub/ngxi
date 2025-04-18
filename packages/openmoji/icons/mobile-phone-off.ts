import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiMobilePhoneOffIcon],svg[openmoji-mobile-phone-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#9b9b9a" d="M44.07 25h3v26h-3z"></svg:path><svg:path fill="#9b9b9a" d="M47.125 46.307v12.857a.836.836 0 0 1-.836.836H18.711a.836.836 0 0 1-.836-.836v-46.8c0-.461.374-.835.836-.835h27.578c.462 0 .836.374.836.836v14.054"></svg:path><svg:path fill="#d0cfce" d="M41.23 25h3v26h-3z"></svg:path><svg:path fill="#d0cfce" d="M43.364 46.307v4.725a.807.807 0 0 1-.807.808H22.443a.807.807 0 0 1-.807-.808V17.547c0-.446.361-.807.807-.807h20.114c.446 0 .807.361.807.807v8.872"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M47.125 46.307v12.857a.836.836 0 0 1-.836.836H18.711a.836.836 0 0 1-.836-.836v-46.8c0-.461.374-.835.836-.835h27.578c.462 0 .836.374.836.836v14.054"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M43.364 46.307v4.725a.807.807 0 0 1-.807.808H22.443a.807.807 0 0 1-.807-.808V17.547c0-.446.361-.807.807-.807h20.114c.446 0 .807.361.807.807v8.872"></svg:path><svg:circle cx="32.5" cy="56.018" r="1.671"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M28.321 14.233h8.358zM43.83 36.47h-3v3.5v-7h4m7 3.5h-3v3.5v-7h4m-19.33 7a2.5 2.5 0 0 1-2.5-2.5v-2a2.5 2.5 0 0 1 2.5-2.5h0a2.5 2.5 0 0 1 2.5 2.5v2a2.5 2.5 0 0 1-2.5 2.5"></svg:path>`,
})
export class OpenmojiMobilePhoneOffIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
