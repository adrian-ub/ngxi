import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsLockFillIcon],svg[lets-icons-lock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 8V7a4 4 0 0 0-4-4v0a4 4 0 0 0-4 4v1"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.879 7.879C3 8.757 3 10.172 3 13v1c0 3.771 0 5.657 1.172 6.828S7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.172S21 17.771 21 14v-1c0-2.828 0-4.243-.879-5.121C19.243 7 17.828 7 15 7H9c-2.828 0-4.243 0-5.121.879M12 15a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3-1a3 3 0 0 1-2 2.83V19h-2v-2.17A3.001 3.001 0 1 1 15 14" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class LetsIconsLockFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
