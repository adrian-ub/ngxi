import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSubmergeIcon],svg[hugeicons-submerge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="14" r="4"></svg:circle><svg:path d="M7 2v1m0 2.5v1M7 9v1m10-8v1m0 2.5v1M17 9v1m-5-8v1m0 2.5v1M2 12v4c0 2.828 0 4.243.879 5.121C3.757 22 5.172 22 8 22h8c2.828 0 4.243 0 5.121-.879C22 20.243 22 18.828 22 16v-4"></svg:path><svg:path d="M2 14.872c2.264 1.914 4.174.857 6.022-.039c1.575-.764 3.104-1.411 4.768 0c3.257 2.714 6.12-.08 9.21-.635"></svg:path></svg:g>`,
})
export class HugeiconsSubmergeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
