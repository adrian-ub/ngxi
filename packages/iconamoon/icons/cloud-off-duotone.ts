import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloudOffDuotoneIcon],svg[iconamoon-cloud-off-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path fill="currentColor" stroke-linejoin="round" d="M2 14.5A4.5 4.5 0 0 0 6.5 19h12q.239 0 .469-.031L7.05 7.05a6.96 6.96 0 0 0-1.81 3.129A4.5 4.5 0 0 0 2 14.5" opacity=".16"></svg:path><svg:path stroke-linejoin="round" d="M7.05 7.05a6.96 6.96 0 0 0-1.81 3.129A4.502 4.502 0 0 0 6.5 19h12q.239 0 .469-.031m-8.203-13.86A6.99 6.99 0 0 1 16.95 7.05A6.98 6.98 0 0 1 19 12.035a3.5 3.5 0 0 1 2.917 4.225"></svg:path><svg:path d="m4 4l16 16"></svg:path></svg:g>`,
})
export class IconamoonCloudOffDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
