import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiShapeOvalPlusIcon],svg[mdi-shape-oval-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5h3v2h-3v3h-2V7h-3V5h3V2h2zm-8-1l1 .09v2.05c-.32-.09-.66-.14-1-.14c-2.76 0-5 3.13-5 7s2.24 7 5 7s5-3.13 5-7l-.05-1h2.01l.04 1c0 4.97-3.13 9-7 9s-7-4.03-7-9s3.13-9 7-9"></svg:path>`,
})
export class MdiShapeOvalPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
