import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconFrontSquareFilledIcon],svg[lsicon-front-square-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5zm3 2a.5.5 0 0 0-.5.5V12h1V8h3.5V7H6V5h4.5V4z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconFrontSquareFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
