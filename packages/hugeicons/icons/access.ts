import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAccessIcon],svg[hugeicons-access-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 2a5 5 0 0 0-2.5 9.331v6.512c0 .818 0 1.226.152 1.594c.152.367.442.656 1.02 1.235L7 22l2.108-2.108c.097-.097.146-.146.186-.199a1 1 0 0 0 .197-.475c.009-.066.009-.135.009-.272c0-.111 0-.167-.006-.221a1 1 0 0 0-.134-.401a2 2 0 0 0-.128-.18L8 16.5l.7-.933c.396-.529.595-.793.697-1.101c.103-.308.103-.638.103-1.3v-1.835A5 5 0 0 0 7 2m0 5h.009M13 14h6c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 15.602 22 16.068 22 17s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 20 19.932 20 19 20h-6m2-15h4c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 6.602 22 7.068 22 8s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 11 19.932 11 19 11h-4" color="currentColor"></svg:path>`,
})
export class HugeiconsAccessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
