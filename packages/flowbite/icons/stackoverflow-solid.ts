import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteStackoverflowSolidIcon],svg[flowbite-stackoverflow-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M17 20v-5h2v6.988H3V15h1.98v5z"></svg:path><svg:path d="m6.84 14.522l8.73 1.825l.369-1.755l-8.73-1.825zm1.155-4.323l8.083 3.764l.739-1.617l-8.083-3.787zm3.372-5.481L10.235 6.08l6.859 5.704l1.132-1.362zM15.57 17H6.655v2h8.915zM12.861 3.111l6.193 6.415l1.414-1.415l-6.43-6.177z"></svg:path></svg:g>`,
})
export class FlowbiteStackoverflowSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
