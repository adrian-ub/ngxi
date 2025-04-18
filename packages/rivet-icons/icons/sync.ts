import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsSyncIcon],svg[rivet-icons-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8v1h.1A5 5 0 0 0 5 13v-2a3 3 0 0 1-.5-5.959v1.827L8.803 4L4.5 1.131v1.894A5 5 0 0 0 0 8m16 0V7h-.1A5 5 0 0 0 11 3h-1v2h1a3 3 0 0 1 .5 5.959V9.13L7.197 12l4.303 2.868v-1.893A5 5 0 0 0 16 8"></svg:path>`,
})
export class RivetIconsSyncIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
