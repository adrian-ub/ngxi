import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidHockeyPuckIcon],svg[fa6-solid-hockey-puck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 256C114.6 256 0 213 0 160s114.6-96 256-96s256 43 256 96s-114.6 96-256 96m192.3 1.8c24.7-9.3 46.9-21 63.7-35.6V352c0 53-114.6 96-256 96S0 405 0 352V222.3c16.8 14.6 39 26.3 63.7 35.6c50.8 19 118.8 30.1 192.3 30.1s141.5-11.1 192.3-30.2"></svg:path>`,
})
export class Fa6SolidHockeyPuckIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
