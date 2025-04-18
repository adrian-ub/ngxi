import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsThatShoppingListIcon],svg[arcticons-that-shopping-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.61 19.999h-7.527l-7.43-12.386c-.382-.571-.954-.953-1.716-.953s-1.334.382-1.715.953L14.792 20H7.454c-2 0-3.334 1.905-2.858 3.715L8.789 39.34c.286 1.143 1.429 2 2.572 2H36.61a2.66 2.66 0 0 0 2.572-2l4.192-15.53c.572-1.905-.858-3.81-2.763-3.81Zm-16.578-7.622l4.573 7.622h-9.05zm-9.05 7.622h18.101"></svg:path><svg:circle cx="13.552" cy="26.096" r="3.906" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24.032" cy="26.096" r="3.906" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="34.512" cy="26.096" r="3.906" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="30.035" cy="35.623" r="3.906" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="18.316" cy="35.623" r="3.906" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m25.557 25.143l-2.001 2.001q-.142.142-.286 0l-.953-.953"></svg:path>`,
})
export class ArcticonsThatShoppingListIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
