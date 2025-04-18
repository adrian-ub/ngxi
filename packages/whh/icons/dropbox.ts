import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhDropboxIcon],svg[whh-dropbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 576L832 683v85L512 960L192 768v-85L0 576l192-192L0 192L320 0l192 192L704 0l320 192l-192 192zM512 243L235 410l277 166l277-166z"></svg:path>`,
})
export class WhhDropboxIcon {
  readonly viewBox = input("0 0 1024 960")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
