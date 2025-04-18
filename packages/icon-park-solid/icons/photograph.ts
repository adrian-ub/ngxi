import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidPhotographIcon],svg[icon-park-solid-photograph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="ipSPhotograph0"><svg:g fill="none"><svg:g stroke="#fff" stroke-linecap="round" stroke-width="4" clip-path="url(#ipSPhotograph1)"><svg:path stroke-linejoin="bevel" d="M34 13V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h15"></svg:path><svg:path stroke-linejoin="round" d="M28 42c-7-4-3.668-9.774-5.023-11c-1.652-1.495-2.59-2.888-2.977-5c-.388-2.112 1.07-4.526 2.977-3C24.885 24.526 28 31 28 31l2-2l1-11s-1-4-1-6s4 1 6 4c0 10.442 1.5 20 6 28"></svg:path><svg:path stroke-linejoin="round" d="M25 17.4L21 11l-8 16h7M6 22l6-11l5 7"></svg:path></svg:g><svg:defs><svg:clippath id="ipSPhotograph1"><svg:path fill="#000" d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g></svg:mask><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSPhotograph0)"></svg:path>`,
})
export class IconParkSolidPhotographIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
