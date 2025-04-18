import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconStampFilledIcon],svg[lsicon-stamp-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 5.5a3.5 3.5 0 1 1 5.405 2.936c-.254.166-.388.377-.403.564H12.5a1.5 1.5 0 0 1 1.5 1.5V12H2v-1.5A1.5 1.5 0 0 1 3.5 9h2.998c-.015-.187-.149-.398-.403-.564A3.5 3.5 0 0 1 4.5 5.5M14 13v1H2v-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconStampFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
