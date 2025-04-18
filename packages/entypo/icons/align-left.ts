import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoAlignLeftIcon],svg[entypo-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 10l3 3v-2h8V9H9V7zM4 2c-.553 0-1 .047-1 .6v14.8c0 .551.447.6 1 .6s1-.049 1-.6V2.6c0-.553-.448-.6-1-.6"></svg:path>`,
})
export class EntypoAlignLeftIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
