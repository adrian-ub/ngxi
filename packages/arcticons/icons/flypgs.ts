import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFlypgsIcon],svg[arcticons-flypgs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.658 30.992v-.79L12.424 5.883h6.236l14.312 17.482s1.827 2.058 2.971 2.79c1.098.702 2.373 1.103 3.624 1.466c1.768.513 5.432.993 5.432.993m-16.287 4.522l-14.656-2.834h-3.161l6.156 3.02l6.197 1.472z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m36.388 41.573l-.256.178l-19.348-5.878l-.68-3.014m28.389-2.356l-25.08.835"></svg:path>`,
})
export class ArcticonsFlypgsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
