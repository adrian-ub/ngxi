import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonExpandAllIcon],svg[carbon-expand-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10h14a2.003 2.003 0 0 0 2-2V4a2.003 2.003 0 0 0-2-2H12a2.003 2.003 0 0 0-2 2v1H6V2H4v23a2.003 2.003 0 0 0 2 2h4v1a2.003 2.003 0 0 0 2 2h14a2.003 2.003 0 0 0 2-2v-4a2.003 2.003 0 0 0-2-2H12a2.003 2.003 0 0 0-2 2v1H6v-8h4v1a2.003 2.003 0 0 0 2 2h14a2.003 2.003 0 0 0 2-2v-4a2.003 2.003 0 0 0-2-2H12a2.003 2.003 0 0 0-2 2v1H6V7h4v1a2.003 2.003 0 0 0 2 2m0-6h14l.001 4H12Zm0 20h14l.001 4H12Zm0-10h14l.001 4H12Z"></svg:path>`,
})
export class CarbonExpandAllIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
