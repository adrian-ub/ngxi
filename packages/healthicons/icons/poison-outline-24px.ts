import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsPoisonOutline24pxIcon],svg[healthicons-poison-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m9.193 17.643l1.414-1.415l-1.414-1.414l1.414-1.414l1.415 1.414l1.414-1.414l1.414 1.414l-1.414 1.414l1.414 1.415l-1.414 1.414l-1.414-1.414l-1.415 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M15 6V4a1 1 0 1 0 0-2H9a1 1 0 0 0 0 2v2a3 3 0 0 0-3 3v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9a3 3 0 0 0-3-3m-4-2h2v4h2a1 1 0 0 1 1 1v1H8V9a1 1 0 0 1 1-1h2zm-3 8h8v8H8z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPoisonOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
