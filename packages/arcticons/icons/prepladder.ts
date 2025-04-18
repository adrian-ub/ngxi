import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPrepladderIcon],svg[arcticons-prepladder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.5 4.5h-10m10 5.571h-10m10 5.572h-10m10 5.571h-10m10 5.572h-10m29-16.715h-10m10 5.572h-10m10 5.571h-10m5 5.572h-10m-4 5.571h-10m10 5.572h-10m10 5.571h-10m24-39h-10"></svg:path>`,
})
export class ArcticonsPrepladderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
