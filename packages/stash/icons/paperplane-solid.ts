import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashPaperplaneSolidIcon],svg[stash-paperplane-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.844 13.483c1.208-.6 1.208-2.367 0-2.966L6.552 4.416c-1.228-.61-2.458.493-2.285 1.72l.54 3.829a1.64 1.64 0 0 0 1.128 1.342c.16.05.55.133 1.012.227c.636.13 4.39.466 4.39.466s-3.754.337-4.39.466c-.461.094-.851.177-1.012.227a1.64 1.64 0 0 0-1.128 1.342l-.54 3.83c-.173 1.226 1.057 2.329 2.285 1.72z"></svg:path>`,
})
export class StashPaperplaneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
