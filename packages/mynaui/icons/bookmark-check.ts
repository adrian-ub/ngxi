import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiBookmarkCheckIcon],svg[mynaui-bookmark-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7.527 20.841C6.861 21.274 6 20.772 6 19.952V3.942c0-.52.336-.942.75-.942h10.5c.414 0 .75.422.75.942v16.01c0 .82-.861 1.322-1.527.89l-3.946-2.562a.96.96 0 0 0-1.054 0z"></svg:path><svg:path d="m9.7 9.822l1.379 1.576a.3.3 0 0 0 .466-.022l2.8-3.876"></svg:path></svg:g>`,
})
export class MynauiBookmarkCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
