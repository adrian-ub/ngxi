import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGolfIcon],svg[tabler-golf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 18V3l7 4l-7 4"></svg:path><svg:path d="M9 17.67c-.62.36-1 .82-1 1.33c0 1.1 1.8 2 4 2s4-.9 4-2c0-.5-.38-.97-1-1.33"></svg:path></svg:g>`,
})
export class TablerGolfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
