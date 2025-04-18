import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsBoxArchive1Icon],svg[lineicons-box-archive-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 11.565a.75.75 0 1 0 0 1.5h4a.75.75 0 0 0 0-1.5z"></svg:path><svg:path fill="currentColor" d="M2 6.064a2.25 2.25 0 0 1 2.25-2.25h15.5A2.25 2.25 0 0 1 22 6.064v1a2.25 2.25 0 0 1-1.25 2.017v9.984a2.25 2.25 0 0 1-2.25 2.25h-13a2.25 2.25 0 0 1-2.25-2.25V9.08A2.25 2.25 0 0 1 2 7.064zm2.75 3.25v9.75c0 .415.336.75.75.75h13a.75.75 0 0 0 .75-.75v-9.75zm15.75-2.25v-1a.75.75 0 0 0-.75-.75H4.25a.75.75 0 0 0-.75.75v1c0 .415.336.75.75.75h15.5a.75.75 0 0 0 .75-.75"></svg:path>`,
})
export class LineiconsBoxArchive1Icon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
