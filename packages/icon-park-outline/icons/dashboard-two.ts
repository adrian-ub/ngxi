import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineDashboardTwoIcon],svg[icon-park-outline-dashboard-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 44c11.046 0 20-8.954 20-20a19.94 19.94 0 0 0-5.845-14.13A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.845 9.87A19.94 19.94 0 0 0 4 24c0 11.046 8.954 20 20 20M4 24h4M9.845 9.87l3.13 3.13M24 4v4m20 16h-4M38.155 9.87L35.025 13M24 20v12"></svg:path><svg:path d="M39.852 36.196C36.195 40.942 30.455 44 24 44s-12.195-3.058-15.852-7.804A31.85 31.85 0 0 1 24 32a31.85 31.85 0 0 1 15.852 4.196"></svg:path></svg:g>`,
})
export class IconParkOutlineDashboardTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
