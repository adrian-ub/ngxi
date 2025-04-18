import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPolarFlowIcon],svg[arcticons-polar-flow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.8 21.458h18.478c2.688 0 2.688-4.443 0-4.443H9.248m-.023-.008c2.725-5.47 8.38-8.936 14.576-8.936c8.965 0 16.232 7.144 16.232 15.955h0c0 8.812-7.267 15.956-16.232 15.956h0c-8.964 0-16.232-7.144-16.232-15.956h0c0-.861.071-1.722.213-2.572"></svg:path>`,
})
export class ArcticonsPolarFlowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
