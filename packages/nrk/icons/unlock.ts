import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkUnlockIcon],svg[nrk-unlock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 2a4 4 0 0 0-3.92 3.2S8 5.5 8 6H6c0-.5.12-1.2.12-1.2A6 6 0 0 1 18 6v2h-2V6a4 4 0 0 0-4-4m1 16v-4h-2v4z"></svg:path><svg:path fill-rule="evenodd" d="M3 10h18v12H3zm2 2v8h14v-8z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class NrkUnlockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
