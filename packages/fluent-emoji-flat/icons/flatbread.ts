import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatFlatbreadIcon],svg[fluent-emoji-flat-flatbread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F3AD61" d="M2 15C2 7.82 7.82 2 15 2h2c7.18 0 13 5.82 13 13v2c0 7.18-5.82 13-13 13h-2C7.82 30 2 24.18 2 17z"></svg:path><svg:path fill="#D3883E" d="m6.87 17.25l-.18-.18a.63.63 0 0 1 0-.88l9.51-9.51c.24-.24.64-.24.88 0l.18.18c.24.24.24.64 0 .88l-9.51 9.51a.61.61 0 0 1-.88 0M8.1 23.9a.754.754 0 0 1 0-1.06L22.84 8.1c.29-.29.77-.29 1.06 0s.29.77 0 1.06L9.16 23.9c-.29.29-.77.29-1.06 0m6.65 1.24l.18.18c.24.24.63.24.88 0l9.51-9.51c.24-.24.24-.64 0-.88l-.18-.18a.63.63 0 0 0-.88 0l-9.51 9.51c-.24.24-.24.64 0 .88"></svg:path></svg:g>`,
})
export class FluentEmojiFlatFlatbreadIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
