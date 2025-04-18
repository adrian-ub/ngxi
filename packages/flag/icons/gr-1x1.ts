import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagGr1x1Icon],svg[flag-gr-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0d5eaf" fill-rule="evenodd" d="M0 0h512v57H0z"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M0 57h512v57H0z"></svg:path><svg:path fill="#0d5eaf" fill-rule="evenodd" d="M0 114h512v57H0z"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M0 171h512v57H0z"></svg:path><svg:path fill="#0d5eaf" fill-rule="evenodd" d="M0 228h512v56.9H0z"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M0 284.9h512v57H0z"></svg:path><svg:path fill="#0d5eaf" fill-rule="evenodd" d="M0 341.9h512v57H0z"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M0 398.9h512v57H0z"></svg:path><svg:path fill="#0d5eaf" d="M0 0h284.9v284.9H0z"></svg:path><svg:g fill="#fff" fill-rule="evenodd" stroke-width="1.3"><svg:path d="M114 0h57v284.9h-57z"></svg:path><svg:path d="M0 114h284.9v57H0z"></svg:path></svg:g><svg:path fill="#0d5eaf" fill-rule="evenodd" d="M0 455h512v57H0z"></svg:path>`,
})
export class FlagGr1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
