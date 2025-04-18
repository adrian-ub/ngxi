import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneSunHatIcon],svg[icon-park-twotone-sun-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTSunHat0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M12 10a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v10H12z"></svg:path><svg:path d="M44 35c-1.108 1.333-2.375 5-7.6 5c-2.737 0-6.456-1.684-11.4-3"></svg:path><svg:path d="M4 35s6-9 8-15h24c2 6 8 15 8 15c-6-4-25 5-32 5c-5.5 0-6.833-3.667-8-5"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTSunHat0)"></svg:path>`,
})
export class IconParkTwotoneSunHatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
