import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsWarning24Icon],svg[qlementine-icons-warning-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1m1.2 12a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m.488 17.5l7.53-15c1.65-3.29 6.31-3.29 7.97 0l7.53 15c1.5 3-.654 6.54-3.98 6.54h-15.1c-3.33 0-5.49-3.54-3.98-6.54zm.894.449l7.53-15c1.28-2.56 4.9-2.56 6.18 0l7.53 15c1.18 2.34-.518 5.09-3.09 5.09h-15.1c-2.57 0-4.27-2.75-3.09-5.09z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsWarning24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
