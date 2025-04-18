import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiSixCircleSolidIcon],svg[mynaui-six-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 15.25a1.75 1.75 0 0 1-1.75-1.75c0-.458.171-.729.422-.91c.283-.205.735-.34 1.328-.34s1.045.135 1.328.34c.251.181.422.452.422.91A1.75 1.75 0 0 1 12 15.25"></svg:path><svg:path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M12.5 7.25A3.75 3.75 0 0 0 8.75 11v2.5a3.25 3.25 0 0 0 6.5 0c0-.923-.389-1.652-1.043-2.125c-.621-.45-1.419-.625-2.207-.625c-.606 0-1.217.103-1.75.355V11a2.25 2.25 0 0 1 2.25-2.25h1a.75.75 0 0 0 0-1.5z"></svg:path></svg:g>`,
})
export class MynauiSixCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
