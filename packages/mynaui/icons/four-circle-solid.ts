import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiFourCircleSolidIcon],svg[mynaui-four-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m11.056-3.8a.75.75 0 1 0-1.445-.4c-.383 1.377-1.16 2.668-1.863 3.633a16 16 0 0 1-1.185 1.44l-.072.075l-.018.018l-.004.004a.75.75 0 0 0 .531 1.28h3V16a.75.75 0 0 0 1.5 0v-1.75h.5a.75.75 0 0 0 0-1.5h-.5V12a.75.75 0 0 0-1.5 0v.75h-1.366q.159-.203.326-.433c.755-1.035 1.645-2.494 2.096-4.116"></svg:path>`,
})
export class MynauiFourCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
