import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLineagePhoneIcon],svg[arcticons-lineage-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.143 24a34.37 34.37 0 0 1 6.03-19.5H19.88a34.54 34.54 0 0 0 0 39h8.294a34.37 34.37 0 0 1-6.03-19.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.87 16.836h6.096a3.11 3.11 0 0 0 2.536-1.311l2.003-2.826a3.5 3.5 0 0 0 .647-2.031h0a3.5 3.5 0 0 0-.647-2.031l-2.45-3.457a1.61 1.61 0 0 0-1.316-.68h-1.566M22.87 31.164h6.096a3.11 3.11 0 0 1 2.536 1.311l2.003 2.826a3.5 3.5 0 0 1 .647 2.031h0a3.5 3.5 0 0 1-.647 2.031l-2.45 3.457a1.61 1.61 0 0 1-1.316.68h-1.566"></svg:path>`,
})
export class ArcticonsLineagePhoneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
