import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidFilePowerpointIcon],svg[fa6-solid-file-powerpoint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0zm192 0v128h128zM136 240h68c42 0 76 34 76 76s-34 76-76 76h-44v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V264c0-13.3 10.7-24 24-24m68 104c15.5 0 28-12.5 28-28s-12.5-28-28-28h-44v56z"></svg:path>`,
})
export class Fa6SolidFilePowerpointIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
