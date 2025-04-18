import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMementoDatabaseIcon],svg[arcticons-memento-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.094 31.734h3.704m-3.704-3.649h3.704m-3.704-3.649h3.704m-5.27-3.014h6.836v13.102h-6.836zM9.202 31.734h3.704m-3.704-3.649h3.704m-3.704-3.649h3.704m-5.27-3.014h6.836v13.102H7.636zm14.517 10.312h3.703m-3.703-3.649h3.703"></svg:path><svg:circle cx="36.946" cy="14.486" r="2.962" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="14.486" r="2.962" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:rect width="11.108" height="37.596" x="18.446" y="5.202" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.019"></svg:rect><svg:rect width="11.108" height="37.596" x="31.392" y="5.202" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.019"></svg:rect><svg:rect width="11.108" height="37.596" x="5.5" y="5.202" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.019"></svg:rect><svg:circle cx="11.054" cy="14.486" r="2.962" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.153 24.436h3.703m-5.274-3.014h6.836v13.102h-6.836z"></svg:path>`,
})
export class ArcticonsMementoDatabaseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
