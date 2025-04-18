import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashCamWebSolidIcon],svg[stash-cam-web-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="12" cy="10" r="6.5" fill="currentColor"></svg:circle><svg:circle cx="12" cy="10" r="4" fill="currentColor"></svg:circle><svg:path d="M7.131 16.968c-.579.77-1.346 1.517-1.977 2.077c-.359.319-.134.955.346.955h13c.48 0 .705-.636.346-.955c-.63-.56-1.398-1.306-1.977-2.077"></svg:path></svg:g>`,
})
export class StashCamWebSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
