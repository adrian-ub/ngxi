import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTicket03Icon],svg[hugeicons-ticket-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 8.879c-.067-1.542-.254-2.546-.78-3.34a4.7 4.7 0 0 0-1.109-1.174C18.945 3.5 17.3 3.5 14.008 3.5H9.993c-3.291 0-4.937 0-6.103.865c-.432.32-.807.717-1.11 1.174c-.525.794-.712 1.798-.78 3.34c-.01.263.216.465.465.465c1.386 0 2.51 1.189 2.51 2.656s-1.124 2.656-2.51 2.656c-.249 0-.476.202-.464.466c.067 1.541.254 2.545.78 3.34a4.7 4.7 0 0 0 1.109 1.173c1.166.865 2.812.865 6.103.865h4.015c3.291 0 4.937 0 6.103-.865c.432-.32.807-.717 1.11-1.174c.525-.794.712-1.798.779-3.34zM13 12h4m-8 4h8" color="currentColor"></svg:path>`,
})
export class HugeiconsTicket03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
