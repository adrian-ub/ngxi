import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowUpLeftOffIcon],svg[pepicons-pop-arrow-up-left-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5.903 12.646a1 1 0 0 1-.906-1.087l.472-5.185a1 1 0 0 1 1.991.181l-.471 5.186a1 1 0 0 1-1.086.905" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12.646 5.903a1 1 0 0 1-.905 1.086l-5.186.471a1 1 0 0 1-.181-1.991l5.185-.472a1 1 0 0 1 1.087.906" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M7.172 7.172a1 1 0 0 1 1.414 0l5.657 5.656a1 1 0 0 1-1.415 1.415L7.172 8.586a1 1 0 0 1 0-1.414" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopArrowUpLeftOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
