import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneGroupIcon],svg[icon-park-twotone-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTGroup0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M12 4H4v8h8zm32 32h-8v8h8zm-32 0H4v8h8zM44 4h-8v8h8z"></svg:path><svg:path stroke-linecap="round" d="M8 36V12m32 24V12M12 8h24M12 40h24"></svg:path><svg:path fill="#555" fill-rule="evenodd" stroke-linecap="round" d="M16 16h9.6v6.4H32V32h-9.6v-6.4H16z" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTGroup0)"></svg:path>`,
})
export class IconParkTwotoneGroupIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
