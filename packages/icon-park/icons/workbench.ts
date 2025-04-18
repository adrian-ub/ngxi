import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkWorkbenchIcon],svg[icon-park-workbench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M12 33H4V7H44V33H36H12Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 22V26"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 33V39"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 18V26"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M32 14V26"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M12 41H36"></svg:path></svg:g>`,
})
export class IconParkWorkbenchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
