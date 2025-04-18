import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faNewspaperOIcon],svg[fa-newspaper-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 384H640v384h384zm128 640v128H512v-128zm0-768v640H512V256zm640 768v128h-512v-128zm0-256v128h-512V768zm0-256v128h-512V512zm0-256v128h-512V256zM256 1216V256H128v960q0 26 19 45t45 19t45-19t19-45m1664 0V128H384v1088q0 33-11 64h1483q26 0 45-19t19-45M2048 0v1216q0 80-56 136t-136 56H192q-80 0-136-56T0 1216V128h256V0z"></svg:path>`,
})
export class FaNewspaperOIcon {
  readonly viewBox = input("0 0 2048 1408")
  readonly width = input("1.46em")
  readonly height = input("1em")
}
