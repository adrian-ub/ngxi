import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSchool01Icon],svg[hugeicons-school-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7 22v-9.724c0-1.082 0-1.623.245-2.077c.244-.453.693-.746 1.592-1.33l2.082-1.356C11.444 7.17 11.706 7 12 7s.556.171 1.082.513l2.081 1.355c.899.585 1.348.878 1.592 1.331c.245.454.245.995.245 2.077V22m-5-9h.009M20 22v-4.838c0-2.291-.944-2.477-3-3.162M4 22v-4.838c0-2.291.944-2.477 3-3.162m-5 8h20M12 7V4.982m0 0V2.97c0-.474 0-.711.146-.858c.46-.463 2.354.631 3.074 1.075c.608.374.78 1.122.78 1.795z"></svg:path><svg:path d="M10 22v-3c0-.943 0-1.414.293-1.707S11.057 17 12 17s1.414 0 1.707.293S14 18.057 14 19v3"></svg:path></svg:g>`,
})
export class HugeiconsSchool01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
