import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidRulerOneIcon],svg[icon-park-solid-ruler-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSRulerOne0"><svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path stroke="#fff" stroke-linejoin="round" d="M43 41H23"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" d="M38.718 5H21L5 41h17.662z"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M9.959 29.882h8.028m-4.722-7.412h8.028m-4.519-7.87h8.029"></svg:path><svg:path stroke="#fff" d="M21 5L5 41"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSRulerOne0)"></svg:path>`,
})
export class IconParkSolidRulerOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
