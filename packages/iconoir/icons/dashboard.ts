import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirDashboardIcon],svg[iconoir-dashboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M15 15.8c0-1.767-3-4.8-3-4.8s-3 3.033-3 4.8s1.343 3.2 3 3.2s3-1.433 3-3.2Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 4v4m-8.5-.5l3 3m11 0l3-3M2 17h4m12 0h4"></svg:path></svg:g>`,
})
export class IconoirDashboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
