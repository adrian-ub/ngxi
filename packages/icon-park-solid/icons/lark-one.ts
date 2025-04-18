import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidLarkOneIcon],svg[icon-park-solid-lark-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="ipSLarkOne0"><svg:g fill="none"><svg:g clip-path="url(#ipSLarkOne1)"><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M3.494 17.72L41.678 6.321L30.364 44.59l-8.88-8.88l.041-9.234l-9.546-.27l-8.485-8.486Z"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M27.535 14.89a4 4 0 1 0 5.657 5.658a4 4 0 0 0-5.657-5.657Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M41.678 6.406L30.364 17.719"></svg:path></svg:g><svg:defs><svg:clippath id="ipSLarkOne1"><svg:path fill="#000" d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g></svg:mask><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSLarkOne0)"></svg:path>`,
})
export class IconParkSolidLarkOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
