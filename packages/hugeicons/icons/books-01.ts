import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBooks01Icon],svg[hugeicons-books-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 15h13c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C18 16.602 18 17.068 18 18s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C16.398 21 15.932 21 15 21H2M2 3h13c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C18 4.602 18 5.068 18 6s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C16.398 9 15.932 9 15 9H2m20 0H9c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C6 10.602 6 11.068 6 12s0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C7.602 15 8.068 15 9 15h13"></svg:path><svg:path d="M21 15c-1.105 0-2-1.343-2-3s.895-3 2-3M3 3c1.105 0 2 1.343 2 3s-.895 3-2 3m0 6c1.105 0 2 1.343 2 3s-.895 3-2 3"></svg:path></svg:g>`,
})
export class HugeiconsBooks01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
