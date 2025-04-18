import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiUmbrellaIcon],svg[mynaui-umbrella-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M15.636 13Q12 9.364 8.364 13C5.878 10.87 4.486 10.87 2 13C2 7.477 6.477 3 12 3s10 4.477 10 10c-2.486-2.13-3.878-2.13-6.364 0"></svg:path><svg:path d="M12 11.5v7.273c0 3.519-5.5 3.519-5.5 0"></svg:path></svg:g>`,
})
export class MynauiUmbrellaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
