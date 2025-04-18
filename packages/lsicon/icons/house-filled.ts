import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconHouseFilledIcon],svg[lsicon-house-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.27 2.08a.5.5 0 0 0-.54 0l-7 4.5l.54.84l.73-.468V13.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V6.952l.73.469l.54-.842zM6.5 9a.5.5 0 0 0-.5.5V13h1v-3h2v3h1V9.5a.5.5 0 0 0-.5-.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconHouseFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
