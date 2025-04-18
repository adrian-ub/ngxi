import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBookmarkOIcon],svg[fa-bookmark-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1152 128H128v1242l423-406l89-85l89 85l423 406zm12-128q23 0 44 9q33 13 52.5 41t19.5 62v1289q0 34-19.5 62t-52.5 41q-19 8-44 8q-48 0-83-32l-441-424l-441 424q-36 33-83 33q-23 0-44-9q-33-13-52.5-41T0 1401V112q0-34 19.5-62T72 9q21-9 44-9z"></svg:path>`,
})
export class FaBookmarkOIcon {
  readonly viewBox = input("0 0 1280 1536")
  readonly width = input("0.84em")
  readonly height = input("1em")
}
