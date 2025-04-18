import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilWindowsSolidIcon],svg[basil-windows-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="M13.027 10.507V5.122l7.453-1.235v6.62zm7.453 9.606L13.027 18.9v-5.405h7.453zM9.633 10.505H3.565V6.622l6.068-1.005zm0 7.907l-6.068-.989v-3.928h6.068z"></svg:path>`,
})
export class BasilWindowsSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
