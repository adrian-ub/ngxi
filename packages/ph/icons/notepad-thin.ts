import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNotepadThinIcon],svg[ph-notepad-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 128a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m-4 28H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8m52-116v160a28 28 0 0 1-28 28H72a28 28 0 0 1-28-28V40a4 4 0 0 1 4-4h28V24a4 4 0 0 1 8 0v12h40V24a4 4 0 0 1 8 0v12h40V24a4 4 0 0 1 8 0v12h28a4 4 0 0 1 4 4m-8 4h-24v12a4 4 0 0 1-8 0V44h-40v12a4 4 0 0 1-8 0V44H84v12a4 4 0 0 1-8 0V44H52v156a20 20 0 0 0 20 20h112a20 20 0 0 0 20-20Z"></svg:path>`,
})
export class PhNotepadThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
