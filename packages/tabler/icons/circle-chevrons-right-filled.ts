import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCircleChevronsRightFilledIcon],svg[tabler-circle-chevrons-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.073 1.868c5.494.04 9.926 4.505 9.926 10c0 5.494-4.432 9.959-9.926 10c-5.494.04-9.992-4.36-10.073-9.853v-.295c.081-5.493 4.579-9.893 10.073-9.852M9.707 8.293a1 1 0 0 0-1.414 0l-.083.094a1 1 0 0 0 .083 1.32L10.585 12l-2.292 2.293a1 1 0 0 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414zm4 0a1 1 0 0 0-1.414 0l-.083.094a1 1 0 0 0 .083 1.32L14.585 12l-2.292 2.293a1 1 0 0 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414z"></svg:path>`,
})
export class TablerCircleChevronsRightFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
