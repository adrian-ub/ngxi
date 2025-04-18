import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSoftwareUninstallIcon],svg[hugeicons-software-uninstall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9.5 10a2 2 0 1 0 4 0a2 2 0 0 0-4 0"></svg:path><svg:path d="M4.57 14a8 8 0 1 1 13.86 0m-5.08 8h-7.7c-1.264 0-1.896 0-2.35-.385a2.1 2.1 0 0 1-.497-.63C2.5 20.407 2.5 19.604 2.5 18s0-2.408.303-2.984a2.1 2.1 0 0 1 .497-.63C3.754 14 4.386 14 5.65 14H19.5m-4.11-7.39l2.012-2.01M16.5 17l2.5 2.5m0 0l2.5 2.5M19 19.5L16.5 22m2.5-2.5l2.5-2.5"></svg:path></svg:g>`,
})
export class HugeiconsSoftwareUninstallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
