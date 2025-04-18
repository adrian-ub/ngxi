import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedFconIcon],svg[token-branded-fcon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedFcon0)" d="M14.5 5.19L12 3L9.5 5.19v6.593l1.344 1.26l.68-.73l-1.025-.96V5.64L12 4.33l1.5 1.31v5.711l-5 4.699v-5.547l-.85.85a.5.5 0 0 0-.15.355v6.652l7.002-6.577zm1.851 6.167a.5.5 0 0 1 .15.35v6.637l-3.941-3.62l.68-.74l2.26 2.08v-5.562l.851.85zM12 15.204l-.5.465v4.87L12 21l.5-.46v-4.871l-.5-.46zm-2.5 2.4l1-.915v3.13l-.8-.735a.6.6 0 0 1-.2-.445zm5-.04l-1-.98v3.3l.81-.74c.125-.12.19-.28.19-.45z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedFcon0" x1="11.04" x2="11.12" y1="3" y2="20.71" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#6167FB"></svg:stop><svg:stop offset=".54" stop-color="#26BAF8"></svg:stop><svg:stop offset=".8" stop-color="#46F7B0"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedFconIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
