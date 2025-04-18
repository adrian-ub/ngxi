import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerStackMiddleIcon],svg[tabler-stack-middle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m16 10l4-2l-8-4l-8 4l4 2"></svg:path><svg:path fill="currentColor" d="m12 12l-4-2l-4 2l8 4l8-4l-4-2z"></svg:path><svg:path d="m8 14l-4 2l8 4l8-4l-4-2"></svg:path></svg:g>`,
})
export class TablerStackMiddleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
