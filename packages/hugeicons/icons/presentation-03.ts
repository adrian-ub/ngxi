import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPresentation03Icon],svg[hugeicons-presentation-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3 10c0 2.828 0 4.243.879 5.121C4.757 16 6.172 16 9 16h6c2.828 0 4.243 0 5.121-.879C21 14.243 21 12.828 21 10V4.5H3z"></svg:path><svg:circle cx="12" cy="20.5" r="1.5"></svg:circle><svg:path d="M12 16v3m9-17H3c-.471 0-.707 0-.854.146C2 2.293 2 2.53 2 3v.5c0 .471 0 .707.146.854c.147.146.383.146.854.146h18c.471 0 .707 0 .854-.146C22 4.207 22 3.97 22 3.5V3c0-.471 0-.707-.146-.854C21.707 2 21.47 2 21 2"></svg:path></svg:g>`,
})
export class HugeiconsPresentation03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
