import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric3CircleIcon],svg[mdi-numeric-3-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 15v-1.5a1.5 1.5 0 0 0-1.5-1.5a1.5 1.5 0 0 0 1.5-1.5V9a2 2 0 0 0-2-2H9v2h4v2h-2v2h2v2H9v2h4a2 2 0 0 0 2-2M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2"></svg:path>`,
})
export class MdiNumeric3CircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
