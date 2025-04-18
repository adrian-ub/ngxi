import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineGroupIcon],svg[icon-park-outline-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M12 4H4v8h8zm32 32h-8v8h8zm-32 0H4v8h8zM44 4h-8v8h8z"></svg:path><svg:path stroke-linecap="round" d="M8 36V12m32 24V12M12 8h24M12 40h24"></svg:path><svg:path stroke-linecap="round" d="M16 16h9.6v6.4H32V32h-9.6v-6.4H16z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkOutlineGroupIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
