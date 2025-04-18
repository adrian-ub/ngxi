import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsCloudAltLightIcon],svg[lets-icons-cloud-alt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m9.803 9l.432.25l-.144.25h-.288zM15 6.5a5.5 5.5 0 0 0-4.764 2.75l-.866-.5A6.5 6.5 0 0 1 15 5.5zm5.5 5.5A5.5 5.5 0 0 0 15 6.5v-1a6.5 6.5 0 0 1 6.5 6.5zM15 17.5a5.5 5.5 0 0 0 5.5-5.5h1a6.5 6.5 0 0 1-6.5 6.5zm-7.5 0H15v1H7.5zm-4-4a4 4 0 0 0 4 4v1a5 5 0 0 1-5-5zm4-4a4 4 0 0 0-4 4h-1a5 5 0 0 1 5-5zm2.303 0H7.5v-1h2.303z"></svg:path><svg:path stroke="currentColor" d="M16.318 17.854A6 6 0 1 0 9 12.024"></svg:path></svg:g>`,
})
export class LetsIconsCloudAltLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
