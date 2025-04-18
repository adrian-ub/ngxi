import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSummationCircleIcon],svg[hugeicons-summation-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15 14.499c-.002.528-.017.815-.15 1.03c-.326.532-.976.469-1.526.469H10.8c-1.107 0-1.661 0-1.78-.327c-.118-.326.303-.694 1.144-1.432l1.69-1.48c.402-.353.604-.53.604-.759c0-.23-.202-.406-.604-.759l-1.69-1.48c-.84-.737-1.262-1.106-1.143-1.432c.118-.327.672-.327 1.78-.327h2.524c.55 0 1.2-.063 1.526.468c.133.216.148.503.15 1.031"></svg:path><svg:circle cx="12" cy="12" r="10"></svg:circle></svg:g>`,
})
export class HugeiconsSummationCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
