import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laStoreIcon],svg[la-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4v3.656l-3 4V12c0 1.645 1.355 3 3 3v13h24V15c1.645 0 3-1.355 3-3v-.344l-3-4V4zm2 2h20v1H6zm-.5 3h21l2.406 3.219c-.109.433-.437.781-.906.781c-.555 0-1-.445-1-1h-2c0 .555-.445 1-1 1s-1-.445-1-1h-2c0 .555-.445 1-1 1s-1-.445-1-1h-2c0 .555-.445 1-1 1s-1-.445-1-1h-2c0 .555-.445 1-1 1s-1-.445-1-1H9c0 .555-.445 1-1 1s-1-.445-1-1H5c0 .555-.445 1-1 1c-.469 0-.797-.348-.906-.781zm.5 5.219c.531.48 1.234.781 2 .781s1.469-.301 2-.781c.531.48 1.234.781 2 .781s1.469-.301 2-.781c.531.48 1.234.781 2 .781s1.469-.301 2-.781c.531.48 1.234.781 2 .781s1.469-.301 2-.781c.531.48 1.234.781 2 .781s1.469-.301 2-.781V21H6zM6 23h20v3H6z"></svg:path>`,
})
export class LaStoreIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
