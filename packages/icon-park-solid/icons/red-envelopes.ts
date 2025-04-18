import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidRedEnvelopesIcon],svg[icon-park-solid-red-envelopes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M40 4H8v40h32z"></svg:path><svg:path stroke-linecap="round" d="M40 10c-4 5.762-7.68 9.32-11.68 10.892m-8.583-.114C15.737 19.207 12 15.763 8 10z"></svg:path><svg:path fill="currentColor" d="M24 27a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Z"></svg:path></svg:g>`,
})
export class IconParkSolidRedEnvelopesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
