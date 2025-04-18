import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTentIcon],svg[icon-park-solid-tent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTent0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#fff" d="M10 12L4 36h12"></svg:path><svg:path fill="#fff" stroke="#fff" d="M38 12H10l6 24h28z"></svg:path><svg:path stroke="#000" d="M12 18h27"></svg:path><svg:path stroke="#fff" d="m10 12l3 12m25-12l3 12"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTent0)"></svg:path>`,
})
export class IconParkSolidTentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
