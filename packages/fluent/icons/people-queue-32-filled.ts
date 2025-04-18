import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPeopleQueue32FilledIcon],svg[fluent-people-queue-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.002 11.5c-.764 0-1.48-.201-2.1-.554c.84-1 1.346-2.289 1.346-3.696a5.73 5.73 0 0 0-1.346-3.696a4.25 4.25 0 1 1 2.1 7.946m1.5 4c0-.946-.329-1.815-.877-2.5h3.377a2.5 2.5 0 0 1 2.5 2.5v7a6.5 6.5 0 0 1-8.078 6.307a7.99 7.99 0 0 0 3.078-6.307zm5-4c-.764 0-1.48-.201-2.1-.554c.84-1 1.345-2.289 1.345-3.696a5.73 5.73 0 0 0-1.345-3.696a4.25 4.25 0 1 1 2.1 7.946m1.5 4c0-.946-.329-1.815-.877-2.5h3.377a2.5 2.5 0 0 1 2.5 2.5v7a6.5 6.5 0 0 1-8.078 6.307a7.99 7.99 0 0 0 3.078-6.307zM5.5 13A2.5 2.5 0 0 0 3 15.5v7a6.5 6.5 0 1 0 13 0v-7a2.5 2.5 0 0 0-2.5-2.5zm4-1.5a4.25 4.25 0 1 0 0-8.5a4.25 4.25 0 0 0 0 8.5"></svg:path>`,
})
export class FluentPeopleQueue32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
