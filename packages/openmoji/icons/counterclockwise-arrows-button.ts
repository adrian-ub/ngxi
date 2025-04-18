import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiCounterclockwiseArrowsButtonIcon],svg[openmoji-counterclockwise-arrows-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiCounterclockwiseArrowsButton0" d="m20.771 30.421l-3.709 4.1c.683-7.708 5.642-14.356 12.963-17.014a19.3 19.3 0 0 1 6.6-1.167c5.482 0 10.76 2.375 14.477 6.516l.61.68l3.857-3.608l-.61-.68C50.253 14.006 43.572 11 36.629 11c-2.848 0-5.66.496-8.356 1.476c-9.208 3.343-15.56 11.828-16.433 21.583l-3.29-3.638l-3.344 3.117l9.455 10.45l9.453-10.45zM67 38.347l-9.455-10.45l-9.453 10.45l3.342 3.117l3.693-4.082c-.65 7.75-5.62 14.442-12.973 17.112a19.3 19.3 0 0 1-6.6 1.166c-5.482 0-10.76-2.375-14.477-6.516l-.61-.68l-3.856 3.608l.61.68C21.925 57.993 28.607 61 35.55 61c2.848 0 5.659-.497 8.355-1.475c9.249-3.357 15.62-11.902 16.447-21.712l3.303 3.65z"></svg:path></svg:defs><svg:use href="#openmojiCounterclockwiseArrowsButton0" fill="#3F3F3F" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></svg:use><svg:use href="#openmojiCounterclockwiseArrowsButton0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></svg:use>`,
})
export class OpenmojiCounterclockwiseArrowsButtonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
