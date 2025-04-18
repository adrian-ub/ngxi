import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFilter3FilledIcon],svg[tdesign-filter-3-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.02.002l3.49 7.988l7.988 3.49l-7.989 3.49l-3.49 7.989l-3.49-7.989l-7.988-3.49L8.53 7.99zm9.305 3.323l-1.57.78l1.57.781l.78 1.57l.782-1.57l1.568-.78l-1.568-.781l-.781-1.57zm-1.99 11.43l1.3 2.611l2.61 1.3l-2.61 1.299l-1.3 2.61l-1.299-2.61l-2.61-1.3l2.61-1.299z"></svg:path>`,
})
export class TdesignFilter3FilledIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
