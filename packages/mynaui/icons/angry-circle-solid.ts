import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiAngryCircleSolidIcon],svg[mynaui-angry-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25S2.25 6.615 2.25 12m5.08-4.335a.75.75 0 0 1 1.005-.336l3 1.5a.75.75 0 1 1-.67 1.342l-.416-.208v.537a.75.75 0 1 1-1.5 0V10a.75.75 0 0 1 .33-.621L7.666 8.67a.75.75 0 0 1-.336-1.006m9.005 1.006l-1.415.708c.199.134.33.362.33.621v.5a.75.75 0 0 1-1.5 0v-.537l-.415.208a.75.75 0 1 1-.67-1.342l3-1.5a.75.75 0 1 1 .67 1.342m-7.782 6.727A5.77 5.77 0 0 1 12 14.25c1.285 0 2.474.427 3.447 1.148a.75.75 0 1 1-.894 1.204A4.27 4.27 0 0 0 12 15.75a4.27 4.27 0 0 0-2.553.852a.75.75 0 1 1-.894-1.204"></svg:path>`,
})
export class MynauiAngryCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
