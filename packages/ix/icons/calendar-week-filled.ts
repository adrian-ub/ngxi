import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCalendarWeekFilledIcon],svg[ix-calendar-week-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 128V64H64v64zm0 42.667H64V448h384zm-42.667 64H192v42.666h213.333zM106.667 320H192v42.667h-85.333z" clip-rule="evenodd"></svg:path>`,
})
export class IxCalendarWeekFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
