import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataPie32RegularIcon],svg[fluent-data-pie-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.047 3.013A1 1 0 0 0 17 4.012V14a1 1 0 0 0 1 1h9.988a1 1 0 0 0 1-1.047C28.71 8.037 23.962 3.29 18.046 3.013M19 13V5.118A9.51 9.51 0 0 1 26.882 13zm-4-5.988a1 1 0 0 0-1.047-1C7.855 6.3 3 11.333 3 17.5C3 23.851 8.149 29 14.5 29c6.168 0 11.201-4.855 11.487-10.953A1 1 0 0 0 24.988 17H17.5a2.5 2.5 0 0 1-2.5-2.5zM5 17.5c0-4.736 3.466-8.663 8-9.382V14.5a4.5 4.5 0 0 0 4.5 4.5h6.382c-.719 4.534-4.646 8-9.382 8A9.5 9.5 0 0 1 5 17.5"></svg:path>`,
})
export class FluentDataPie32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
