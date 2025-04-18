import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTurkishAirlinesIcon],svg[arcticons-turkish-airlines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.136 6.733c2.626 2.246 3.814 4.562 4.787 7.306a17 17 0 0 1 .81 7.926c-.345 2.466-1.222 4.987-2.766 6.941c-2.203 2.789-4.39 4.15-8.723 6.13l32.43-9.081l-14.635.993c1.468-1.55 2.951-3.162 3.495-5.17c.392-1.449.176-3.068-.295-4.493c-.565-1.706-1.68-3.232-2.925-4.528c-1.585-1.651-3.56-2.942-5.611-3.958c-2.057-1.017-4.574-1.734-6.567-2.066"></svg:path>`,
})
export class ArcticonsTurkishAirlinesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
