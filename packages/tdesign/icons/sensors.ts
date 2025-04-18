import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSensorsIcon],svg[tdesign-sensors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0-2.437-.87-4.667-2.317-6.402l-.64-.768l1.535-1.281l.64.767A11.96 11.96 0 0 1 24 12a11.95 11.95 0 0 1-2.782 7.683l-.64.768l-1.536-1.281l.64-.768A9.96 9.96 0 0 0 22 11.999m-4.623-4.483A6.98 6.98 0 0 1 19 12c0 1.704-.61 3.268-1.623 4.482l-.64.768l-1.536-1.281l.64-.768A4.98 4.98 0 0 0 17 12a4.98 4.98 0 0 0-1.158-3.201L15.2 8.03l1.536-1.281zM12 10a2 2 0 1 1 0 4a2 2 0 0 1 0-4M8.799 8.03l-.64.769A4.98 4.98 0 0 0 7 11.999c0 1.219.435 2.333 1.158 3.2l.641.769l-1.536 1.28l-.64-.767A6.98 6.98 0 0 1 5 12c0-1.704.61-3.268 1.623-4.482l.64-.767zm-3.841-3.2l-.64.768A9.96 9.96 0 0 0 2 11.999c0 2.436.87 4.667 2.317 6.402l.64.768l-1.535 1.28l-.64-.767A11.96 11.96 0 0 1 0 12c0-2.921 1.045-5.602 2.781-7.683l.641-.767z"></svg:path>`,
})
export class TdesignSensorsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
