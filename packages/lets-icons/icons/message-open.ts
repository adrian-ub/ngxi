import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsMessageOpenIcon],svg[lets-icons-message-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M4 10.472c0-1.203 0-1.804.299-2.287c.298-.484.836-.753 1.912-1.29l4-2c.878-.44 1.317-.659 1.789-.659s.911.22 1.789.658l4 2c1.076.538 1.614.807 1.912 1.29C20 8.669 20 9.27 20 10.473V16c0 1.886 0 2.828-.586 3.414S17.886 20 16 20H8c-1.886 0-2.828 0-3.414-.586S4 17.886 4 16z"></svg:path><svg:path stroke-linecap="round" d="m4 10l2.414 2.414A2 2 0 0 0 7.828 13h8.344a2 2 0 0 0 1.414-.586L20 10"></svg:path></svg:g>`,
})
export class LetsIconsMessageOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
