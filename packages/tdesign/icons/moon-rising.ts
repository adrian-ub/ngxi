import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMoonRisingIcon],svg[tdesign-moon-rising-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 20h8.303L12 18.202L14.697 20H23v-2h-7.697L12 15.798L8.697 18H1zm19.447-3.658l.447-.895c.545-1.088.857-2.115.92-3.148l.103-1.711l-1.54.752a7 7 0 0 1-9.841-4.476c-.34-1.267-.37-2.488-.07-3.604l.45-1.675l-1.675.45c-5.334 1.429-8.5 6.912-7.07 12.247c.05.187.163.486.24.684l.113.288l.036.09l.01.024l.382.936l1.852-.756l-.381-.933l-.009-.022l-.033-.082l-.106-.268a7 7 0 0 1-.173-.479a8 8 0 0 1 4.164-9.235a9.6 9.6 0 0 0 .337 2.852a9 9 0 0 0 10.84 6.411a9 9 0 0 1-.337.76l-.448.895z"></svg:path>`,
})
export class TdesignMoonRisingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
