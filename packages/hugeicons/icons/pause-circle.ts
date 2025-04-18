import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPauseCircleIcon],svg[hugeicons-pause-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.75 12.322c0-5.11 4.14-9.25 9.25-9.25s9.25 4.14 9.25 9.25s-4.14 9.25-9.25 9.25s-9.25-4.14-9.25-9.25M12 1.572c-5.94 0-10.75 4.81-10.75 10.75S6.06 23.072 12 23.072s10.75-4.81 10.75-10.75S17.94 1.572 12 1.572m-1.75 7.75c0-.41-.34-.75-.75-.75s-.75.34-.75.75v6c0 .41.34.75.75.75s.75-.34.75-.75zm5 0c0-.41-.34-.75-.75-.75s-.75.34-.75.75v6c0 .41.34.75.75.75s.75-.34.75-.75z" color="currentColor"></svg:path>`,
})
export class HugeiconsPauseCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
