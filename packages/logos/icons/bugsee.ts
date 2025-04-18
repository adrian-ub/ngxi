import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosBugseeIcon],svg[logos-bugsee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FC5252" d="M256 93.602h-9.529c-32.965-58.463-112.805-23.437-98.124 36.781h-17.095v-15.984h-4.539v15.984h-16.178v-16.129H89.578v16.129H74.222v-16.177h-5.505v16.177H53.216v-16.129H42.447v16.129H0C0 33.098 92.09-16.578 168.002 5.137c.925-2.415 3.122-4.195 6.421-5.137c3.104 1.712 5.336 4.76 6.445 9.524q3.55 1.429 7.025 3.082s4.204-4.252 10.095-4.203c2.994 4.346 2.946 11.41 2.946 11.41C224.83 34.983 244.729 59.247 256 93.602"></svg:path><svg:path fill="#F9FFFF" d="M190.197 39.774c0 7.254-5.881 13.135-13.135 13.135s-13.135-5.88-13.135-13.135c0-7.254 5.88-13.135 13.135-13.135c7.254 0 13.135 5.881 13.135 13.135"></svg:path><svg:path fill="#FC5252" d="M187.107 43.637a5.022 5.022 0 1 1-10.044 0a5.022 5.022 0 0 1 10.044 0"></svg:path>`,
})
export class LogosBugseeIcon {
  readonly viewBox = input("0 0 256 131")
  readonly width = input("1.96em")
  readonly height = input("1em")
}
