import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTallymark2Icon],svg[tabler-tallymark-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 5v14m4-14v14"></svg:path>`,
})
export class TablerTallymark2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
