import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorCircleSelection01Icon],svg[hugeicons-cursor-circle-selection-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.781 20.966c-1.812.125-3.607-8.326-2.374-9.559s9.684.561 9.559 2.373c-.087 1.187-2.095 1.656-2.037 2.711c.018.309.408.59 1.188 1.154c.543.39 1.096.77 1.629 1.175a.66.66 0 0 1 .234.687a3.35 3.35 0 0 1-2.472 2.473a.66.66 0 0 1-.688-.235c-.404-.533-.784-1.086-1.175-1.628c-.563-.78-.844-1.17-1.153-1.188c-1.055-.059-1.524 1.95-2.71 2.037M20 9.088a9 9 0 0 0-.474-1.483M9.088 20q-.763-.174-1.471-.469m10.308-14.47a9.2 9.2 0 0 0-2.4-1.924M12.63 2.126a9.2 9.2 0 0 0-3.32.052M6.05 3.534A9.2 9.2 0 0 0 3.529 6.06M2.175 9.324a9.2 9.2 0 0 0-.045 3.332m1.007 2.868a9.2 9.2 0 0 0 1.889 2.37" color="currentColor"></svg:path>`,
})
export class HugeiconsCursorCircleSelection01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
