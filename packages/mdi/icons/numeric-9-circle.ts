import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric9CircleIcon],svg[mdi-numeric-9-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m1 15a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v2H9v2zm0-6h-2V9h2z"></svg:path>`,
})
export class MdiNumeric9CircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
