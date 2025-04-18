import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTallymark1Icon],svg[tabler-tallymark-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14"></svg:path>`,
})
export class TablerTallymark1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
