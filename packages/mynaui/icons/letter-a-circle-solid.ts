import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterACircleSolidIcon],svg[mynaui-letter-a-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.918 12.083h-1.836L12 9.636z"></svg:path><svg:path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m10.452-4.763a.75.75 0 0 0-1.404 0l-3 8a.75.75 0 1 0 1.404.526l.818-2.18h2.96l.818 2.18a.75.75 0 1 0 1.404-.526z"></svg:path></svg:g>`,
})
export class MynauiLetterACircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
