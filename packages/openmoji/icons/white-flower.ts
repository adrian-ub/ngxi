import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiWhiteFlowerIcon],svg[openmoji-white-flower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiWhiteFlower0" d="M46.92 17.265a16.54 16.54 0 0 0-2.106-7.145l-2.143 1.362l-1.333-2.256a16.54 16.54 0 0 0-5.293 5.243M14.259 30.41a16.54 16.54 0 0 1-3.432-6.613l2.49-.502l-.601-2.55a16.54 16.54 0 0 1 7.449.116m17.472 35.637a16.54 16.54 0 0 0 5.956 4.475L44.5 58.6l2.416 1.014a16.54 16.54 0 0 0 1.114-7.366m9.982-13.486a16.54 16.54 0 0 0 5.453-5.076l-2.176-1.31l1.424-2.2a16.54 16.54 0 0 0-7.055-2.393M21.43 53.484a16.54 16.54 0 0 1-7.45.117l.663-2.452l-2.55-.601a16.54 16.54 0 0 1 3.43-6.613M29.57 32.7c-3.223-2.653-6.532-7.306-3.538-15.334l2.311.985"></svg:path><svg:path id="openmojiWhiteFlower1" d="m28.24 18.393l.985-2.311c7.72 3.716 8.556 9.364 8.07 13.51l.206-.083c1.25-3.735 4.334-7.969 12.623-8.192l-.098 2.433l2.433.098a13.93 13.93 0 0 1-9.583 12.474M29.57 32.7c-3.49-1.828-8.543-2.786-14.676 2.794l1.756 1.687l-1.687 1.756a13.93 13.93 0 0 0 15.552 2.36"></svg:path><svg:path id="openmojiWhiteFlower2" d="M30.412 41.338a13.71 13.71 0 0 0-4.63 14.67l2.35-.706l.706 2.35c12.115-4.397 8.876-14.824 8.876-14.824l.722-.29s5.05 9.578 16.773 4.501l-1.015-2.225l2.183-1.118a13.85 13.85 0 0 0-13.5-7.374"></svg:path></svg:defs><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:use href="#openmojiWhiteFlower0"></svg:use><svg:use href="#openmojiWhiteFlower1"></svg:use><svg:use href="#openmojiWhiteFlower2"></svg:use></svg:g><svg:g fill="none" stroke="#D22F27" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:use href="#openmojiWhiteFlower0"></svg:use><svg:use href="#openmojiWhiteFlower1"></svg:use><svg:use href="#openmojiWhiteFlower2"></svg:use></svg:g>`,
})
export class OpenmojiWhiteFlowerIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
