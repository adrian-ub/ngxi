import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineWorkbenchIcon],svg[icon-park-outline-workbench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M12 33H4V7h40v26z"></svg:path><svg:path stroke-linecap="round" d="M16 22v4m8 7v6m0-21v8m8-12v12M12 41h24"></svg:path></svg:g>`,
})
export class IconParkOutlineWorkbenchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
