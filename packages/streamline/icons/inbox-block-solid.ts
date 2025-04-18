import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInboxBlockSolidIcon],svg[streamline-inbox-block-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.576 0h9.311c.858 0 1.552.695 1.552 1.552v.077L6.232 4.733L.024 1.629v-.077C.024.695.72 0 1.576 0m4.935 5.99l5.928-2.963v3.202a4.67 4.67 0 0 0-6.507 3.082H1.576A1.55 1.55 0 0 1 .024 7.76V3.027L5.952 5.99a.63.63 0 0 0 .56 0Zm3.949 2.442a2.028 2.028 0 0 1 1.862 2.83L9.657 8.597c.246-.106.518-.165.803-.165m3.527 2.028a3.52 3.52 0 0 1-1.08 2.54a3.528 3.528 0 1 1 1.08-2.54m-5.39-.803l2.665 2.665a2.028 2.028 0 0 1-2.665-2.665" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineInboxBlockSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
