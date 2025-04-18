import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconFindFilledIcon],svg[lsicon-find-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 4H2V3h12zM9.456 6.005a2.451 2.451 0 1 0 0 4.902a2.451 2.451 0 0 0 0-4.902m-3.451 2.45a3.451 3.451 0 1 1 6.219 2.062l1.717 1.716l-.708.707l-1.716-1.716a3.451 3.451 0 0 1-5.512-2.768M5 8.5H2v-1h3zM6 13H2v-1h4z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconFindFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
