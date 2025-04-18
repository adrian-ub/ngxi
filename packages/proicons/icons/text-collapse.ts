import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsTextCollapseIcon],svg[proicons-text-collapse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.125 4.5h14.5m-14.5 15h14.5m-7.5-10h7.5m-7.5 5h7.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.875 16.5a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m-2-5a.5.5 0 1 0 0 1h4a.5.5 0 0 0 0-1z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class ProiconsTextCollapseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
