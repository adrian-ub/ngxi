import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidFlushedIcon],svg[fa-solid-flushed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M344 200c-13.3 0-24 10.7-24 24s10.7 24 24 24s24-10.7 24-24s-10.7-24-24-24m-192 0c-13.3 0-24 10.7-24 24s10.7 24 24 24s24-10.7 24-24s-10.7-24-24-24M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8M80 224c0-39.8 32.2-72 72-72s72 32.2 72 72s-32.2 72-72 72s-72-32.2-72-72m232 176H184c-21.2 0-21.2-32 0-32h128c21.2 0 21.2 32 0 32m32-104c-39.8 0-72-32.2-72-72s32.2-72 72-72s72 32.2 72 72s-32.2 72-72 72"></svg:path>`,
})
export class FaSolidFlushedIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}
