import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayDivideIcon],svg[subway-divide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0m0 85.3c23.5 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7c-23.5 0-42.7-19.1-42.7-42.7s19.2-42.7 42.7-42.7m0 341.4c-23.5 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7c23.5 0 42.7 19.1 42.7 42.7s-19.2 42.7-42.7 42.7m149.3-149.4c0 11.8-9.5 21.3-21.3 21.3H128c-11.8 0-21.3-9.6-21.3-21.3v-42.7c0-11.8 9.5-21.3 21.3-21.3h256c11.8 0 21.3 9.6 21.3 21.3z"></svg:path>`,
})
export class SubwayDivideIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
