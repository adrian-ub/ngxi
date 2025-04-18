import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatCheckBoxWithCheckIcon],svg[fluent-emoji-flat-check-box-with-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#785DC8" d="M26.875 30H5.125A3.125 3.125 0 0 1 2 26.875V5.125C2 3.399 3.4 2 5.125 2h21.75C28.601 2 30 3.4 30 5.125v21.75C30 28.601 28.6 30 26.875 30"></svg:path><svg:path fill="#F4F4F4" d="M13.242 23c-.383 0-.766-.143-1.059-.43l-5.744-5.642a1.453 1.453 0 0 1 0-2.08a1.517 1.517 0 0 1 2.118 0l4.685 4.601L23.443 9.431a1.517 1.517 0 0 1 2.118 0a1.45 1.45 0 0 1 0 2.08l-11.26 11.058a1.5 1.5 0 0 1-1.059.431"></svg:path></svg:g>`,
})
export class FluentEmojiFlatCheckBoxWithCheckIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
