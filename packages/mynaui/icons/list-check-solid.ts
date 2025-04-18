import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiListCheckSolidIcon],svg[mynaui-list-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.082 4.973a.75.75 0 0 0-1.164-.946L4.541 6.953l-1.118-.764a.75.75 0 1 0-.846 1.238L4.264 8.58a.75.75 0 0 0 1.006-.146zm0 5.769a.75.75 0 0 0-1.164-.946l-2.377 2.926l-1.118-.764a.75.75 0 0 0-.846 1.238l1.687 1.154a.75.75 0 0 0 1.006-.146zm0 5.769a.75.75 0 0 0-1.164-.945L4.541 18.49l-1.118-.764a.75.75 0 1 0-.846 1.238l1.687 1.154a.75.75 0 0 0 1.006-.146zM11 5.75a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5zm0 5.5a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5zm0 5.5a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiListCheckSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
