import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsFlaskAltIcon],svg[lets-icons-flask-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M15 5v6.697a1 1 0 0 0 .168.555l4.796 7.193A1 1 0 0 1 19.132 21H4.868a1 1 0 0 1-.833-1.555l4.796-7.193A1 1 0 0 0 9 11.697V5"></svg:path><svg:path fill="currentColor" d="m16.9 18.2l-2.1-2.8a1 1 0 0 0-.8-.4h-4a1 1 0 0 0-.8.4l-2.1 2.8a.5.5 0 0 0 .4.8h9a.5.5 0 0 0 .4-.8"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 5h10"></svg:path></svg:g>`,
})
export class LetsIconsFlaskAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
