import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDikiDictionaryIcon],svg[arcticons-diki-dictionary-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.306 28.352c-4.354-3.653-8.193-9.449.024-15.447C22.966 2.95 50.903 18.714 41.663 28.99c-8.95 9.954-25.322 3.69-26.355 3.284c-.96 3.271-.468 5.99-.468 5.99c-5.411-4.588-5.559-9.016-5.534-9.913m18.543-13.549l-3.058 11.515m.651-2.446l6.59-3.802m-4.493 2.592l3.014 5.168"></svg:path><svg:circle cx="22.577" cy="15.816" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m22.2 19.445l-.814 7.851"></svg:path><svg:circle cx="34.564" cy="17.538" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m34.439 21.185l-.269 7.888m-16.183-6.954a2.98 2.98 0 0 0-2.114-3.643h0a2.98 2.98 0 0 0-3.643 2.114l-.497 1.871a2.98 2.98 0 0 0 2.114 3.643h0a2.98 2.98 0 0 0 3.643-2.114m-.764 2.879l3.058-11.515"></svg:path>`,
})
export class ArcticonsDikiDictionaryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
