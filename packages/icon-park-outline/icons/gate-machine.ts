import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineGateMachineIcon],svg[icon-park-outline-gate-machine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M6 42v-8h6v8zm30 0v-8h6v8zM24 14v3m0-11v2m0 18v4M9 6v28M39 6v28m-15 4v4m-4-21H9v9zm8 0h11v9z"></svg:path><svg:path d="M18 15H9m21 0h9"></svg:path></svg:g>`,
})
export class IconParkOutlineGateMachineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
