import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsCompassAltLightIcon],svg[lets-icons-compass-alt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="12" cy="12" r="9.5"></svg:circle><svg:path stroke-linecap="round" d="m8.543 8.608l1.949 4.872a.05.05 0 0 0 .028.028l4.872 1.949a.05.05 0 0 0 .065-.065l-1.949-4.872a.05.05 0 0 0-.028-.028L8.608 8.543a.05.05 0 0 0-.065.065ZM13 11l-2 2m-.5-5.5V4.62a.05.05 0 0 1 .085-.035l2.83 2.83a.05.05 0 0 0 .085-.036V4.5m0 12h-2.419c-.32 0-.581.26-.581.581v0c0 .25.16.472.397.552l2.206.735a.58.58 0 0 1 .397.55v0c0 .322-.26.582-.581.582H10.5"></svg:path></svg:g>`,
})
export class LetsIconsCompassAltLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
