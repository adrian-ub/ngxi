import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkLockIcon],svg[nrk-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 3a4 4 0 0 0-4 4v1H6V7a6 6 0 1 1 12 0v1h-2V7a4 4 0 0 0-4-4m1 15v-4h-2v4z"></svg:path><svg:path fill-rule="evenodd" d="M21 10v12H3V10zM5 12v8h14v-8z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class NrkLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
