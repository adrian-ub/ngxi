import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mapDepartmentStoreIcon],svg[map-department-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34 11V7.964C34 5.483 31.891 3 29.411 3h-8.343C18.589 3 16 5.483 16 7.964V11h-5.312L5 46h40.187l-5.778-35zM19 7.964C19 7.035 20.14 6 21.068 6h8.343C30.338 6 31 7.035 31 7.964V11H19z"></svg:path>`,
})
export class MapDepartmentStoreIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
