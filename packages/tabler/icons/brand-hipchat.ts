import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandHipchatIcon],svg[tabler-brand-hipchat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17.802 17.292s.077-.055.2-.149c1.843-1.425 3-3.49 3-5.789c0-4.286-4.03-7.764-9-7.764s-9 3.478-9 7.764c0 4.288 4.03 7.646 9 7.646q.636 0 2.088-.084c1.262.82 3.104 1.493 4.716 1.493c.499 0 .734-.41.414-.828c-.486-.596-1.156-1.551-1.416-2.29z"></svg:path><svg:path d="M7.5 13.5c2.5 2.5 6.5 2.5 9 0"></svg:path></svg:g>`,
})
export class TablerBrandHipchatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
