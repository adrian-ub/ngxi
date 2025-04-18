import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilTearIcon],svg[uil-tear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.56 2.17a1 1 0 0 0-1.12 0c-.3.2-7.19 5-7.19 12.08a7.75 7.75 0 0 0 15.5 0c0-7.2-6.9-11.89-7.19-12.08M12 20a5.76 5.76 0 0 1-5.75-5.75c0-5 4.21-8.77 5.75-10c1.55 1.21 5.75 5 5.75 10A5.76 5.76 0 0 1 12 20"></svg:path>`,
})
export class UilTearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
