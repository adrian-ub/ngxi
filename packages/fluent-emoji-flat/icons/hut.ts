import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatHutIcon],svg[fluent-emoji-flat-hut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#6D4534" d="M28 30h-8.43l-3.5-5.31l-3.5 5.31H4V17h24z"></svg:path><svg:path fill="#F3AD61" d="M29.93 17.855c0 .63-.51 1.14-1.14 1.14c-.07 0-.16-.01-.23-.02c-1.29-.13-1.4-1.01-2.9-1.01c-1.61 0-1.61 1.03-3.22 1.03s-1.61-1.03-3.22-1.03s-1.61 1.03-3.22 1.03s-1.61-1.03-3.21-1.03c-1.61 0-1.61 1.03-3.21 1.03c-1.61 0-1.61-1.03-3.21-1.03c-1.61 0-1.61 1.03-3.22 1.03h-.03c-.63-.01-1.12-.51-1.12-1.14c0-.16.03-.31.08-.45c.01-.01.02-.02.02-.04c.05-.08.11-.16.16-.23c.78-1.26 1.61-2.48 2.48-3.66c2.65-3.63 5.52-6.7 8.82-9.54c1.45-1.25 3.6-1.25 5.03.02c3.18 2.83 6.08 5.93 8.66 9.52c.87 1.2 1.7 2.44 2.49 3.71c.04.07.08.15.13.22c.03.14.06.29.06.45"></svg:path><svg:path fill="#212121" d="M20 30h-8v-4.78c0-1.23 1.143-2.22 2.537-2.22h2.914c1.406 0 2.538 1 2.538 2.22V30z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatHutIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
