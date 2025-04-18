import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagHk1x1Icon],svg[flag-hk-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#EC1B2E" d="M0 0h512v512H0"></svg:path><svg:path id="flagHk1x10" fill="#fff" d="M282.3 119.2C203 114 166.6 218 241.6 256.4C215.6 234 221 201 231.5 184l1.9 1c-13.8 23.6-11.2 52.8 11 71c-12.6-12.2-9.4-39 12.2-48.8s23.6-39.3 16.4-49.1q-14.7-25.6 9.3-39zM243.9 180l-4.7 7.4l-1.8-8.6l-8.6-2.3l7.8-4.3l-.6-9l6.5 6.2l8.3-3.3l-3.7 8l5.6 6.9z"></svg:path><svg:use href="#flagHk1x10" transform="rotate(72 248.5 259.5)"></svg:use><svg:use href="#flagHk1x10" transform="rotate(144 248.5 259.5)"></svg:use><svg:use href="#flagHk1x10" transform="rotate(216 248.5 259.5)"></svg:use><svg:use href="#flagHk1x10" transform="rotate(288 248.5 259.5)"></svg:use>`,
})
export class FlagHk1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
