import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1MagnifyingGlassTiltedLeftIcon],svg[emojione-v1-magnifying-glass-tilted-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#243438"><svg:path d="M44.52 63.35c-1.553.746-3.034.886-3.312.308l-15.962-33.08c-.277-.576.753-1.652 2.308-2.403c1.551-.747 3.039-.888 3.314-.308l15.96 33.08c.276.575-.758 1.656-2.308 2.406"></svg:path><svg:path d="M45.603 21.691c0 11.989-9.718 21.691-21.693 21.691c-11.977 0-21.693-9.702-21.693-21.691S11.933 0 23.91 0c11.975 0 21.693 9.702 21.693 21.691"></svg:path></svg:g><svg:path fill="#30434a" d="M43.4 21.691c0 10.766-8.731 19.485-19.489 19.485S4.424 32.457 4.424 21.691c0-10.77 8.728-19.485 19.487-19.485S43.4 10.921 43.4 21.691"></svg:path><svg:path fill="#1e75bb" d="M41.26 21.691c0 9.583-7.769 17.344-17.347 17.344c-9.574 0-17.345-7.762-17.345-17.344c0-9.585 7.771-17.345 17.345-17.345c9.578 0 17.347 7.76 17.347 17.345"></svg:path><svg:g transform="translate(2)"><svg:circle cx="21.91" cy="21.691" r="15.205" fill="#57c6e9"></svg:circle><svg:path fill="#27a8e0" d="M13.557 8.956a15.18 15.18 0 0 0-6.852 12.702c0 8.396 6.807 15.205 15.205 15.205c.148 0 .297-.02.445-.024C7.44 29.446 11.124 14.095 13.557 8.956"></svg:path></svg:g>`,
})
export class EmojioneV1MagnifyingGlassTiltedLeftIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
